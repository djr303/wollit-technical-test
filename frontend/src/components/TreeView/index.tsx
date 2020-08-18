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

import OpenFolder from './OpenFolder'
import ClosedFolder from './ClosedFolder'


export type TreeViewProps = {
  categories: Category[]
  onExpandTree: (e: any, nodeIds: any, maxDepth: number) => void
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
    fontSize: '1.4em',
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
      defaultCollapseIcon={<OpenFolder />}
      defaultExpandIcon={<ClosedFolder />}
      defaultEndIcon={<ClosedFolder />}
      expanded={Object.keys(expandedNodeIds)}
      onNodeSelect={onNodeSelect}
    >
      { subTree(categories, maxDepth, setMaxDepth, 1) }
    </TreeView>
  );
}


export default TreeViewConatiner