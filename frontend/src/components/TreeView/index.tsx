import React, { useContext, useState, useCallback } from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'
import Collapse from '@material-ui/core/Collapse'
import { useSpring, animated } from 'react-spring/web.cjs'
import { Category } from '../../types'
import { AnyMxRecord } from 'dns';
import { useMachine } from '@xstate/react'
import pageMachine from '../../machines/pageMachine'
import machineContext from '../../contexts/machineContext'

export type TreeViewProps = {
  categories: Category[]
  onExpandTree: (e: any, nodeIds: any, maxDepth: number) => void
}

function MinusSquare(props: any) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 18, height: 18, fill: '#3d3d3' }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props: any) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 18, height: 18, fill: '#3d3d3' }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props: any) {
  return (
    <SvgIcon className="close" fontSize="inherit" style={{ width: 18, height: 18, fill: '#3d3d3' }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props: any) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}


const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    marginLeft: '2px'
  },
  label: {
    fontSize: '1.6em',
    fontFamily: '"Nunito", Arial, Helvetica, sans-serif',
    backgroundColor: 'transparent !important',
    '&:hover': {
      backgroundColor: 'transparent !important'
    },
    '&:focused': {
      backgroundColor: 'transparent !important'
    }
  },
  selected: {
    backgroundColor: 'transparent !important',
    '&:focus': {
      backgroundColor: 'transparent !important',
    }
  },
  group: {
    marginLeft: '25px !important',
  },
}))((props: any) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const subTree = (categories: any, maxDepth?:any, setDepth?: any, depth?: any) => categories.map((c: any) => {

  if (maxDepth < depth) {
    setDepth(depth)
  }

  return (
    <StyledTreeItem key={c.id} nodeId={c.id} label={c.name}>
      {c.categories ? subTree(c.categories, maxDepth, setDepth, depth + 1) : null }
    </StyledTreeItem>
  )
})

const TreeViewConatiner: React.FC<TreeViewProps> = ({ categories, onExpandTree }) => {
  const [maxDepth, setMaxDepth] = useState(1)
  const [expandedNodeIds, setExpandedNodeIds] = useState<any>({})
  const classes = useStyles();

  const onNodeSelect = useCallback((e:any, value:any) => {
    if (expandedNodeIds.hasOwnProperty(value)) {
      delete expandedNodeIds[value]
    } else {
      expandedNodeIds[value] = value 
    }
    setExpandedNodeIds({ ...expandedNodeIds })
    onExpandTree(e, value, maxDepth + 1);
  }, [expandedNodeIds])

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['1']}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<CloseSquare />}
      expanded={Object.keys(expandedNodeIds)}
      onNodeSelect={onNodeSelect}
    >
      { subTree(categories, maxDepth, setMaxDepth, 1) }
    </TreeView>
  );
}


export default TreeViewConatiner