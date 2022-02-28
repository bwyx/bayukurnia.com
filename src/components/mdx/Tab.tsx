import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { css } from '~/styles'
import stack from '~/styles/stack.style'
import text from '~/styles/text.style'

interface TabProps {
  children: React.ReactNode
  defaultTab?: number
}

interface TabItemProps {
  title: string
  children: React.ReactNode
}

const styles = {
  tabList: stack({
    dir: 'row',
    css: {
      ml: '$4'
    }
  }),
  tabTrigger: text({
    size: 'xs',
    tracking: 'wide',
    css: {
      padding: '$1 $2',
      borderBottom: '1px solid transparent',
      xColor: '$fg3',
      '&[data-state="active"]': {
        xColor: '$brand',
        borderColor: 'rgb($rgb$brand)'
      }
    }
  }),
  tabContent: css({
    maxHeight: '$xl',
    overflowY: 'auto',
    borderRadius: '$lg',
    'pre:first-child': {
      borderRadius: 0,
      marginTop: 0,
      marginBottom: 0
    }
  })()
}

const Tab = ({ children, defaultTab = 0 }: TabProps) => {
  if (!Array.isArray(children)) {
    return <div className="Tabs">{children}</div>
  }

  return (
    <Tabs.Root defaultValue={defaultTab.toString()}>
      <Tabs.List className={styles.tabList}>
        {React.Children.map(
          children,
          (child: React.ReactElement<TabItemProps>, i: number) => {
            return (
              <Tabs.Trigger value={i.toString()} className={styles.tabTrigger}>
                {child.props.title}
              </Tabs.Trigger>
            )
          }
        )}
      </Tabs.List>

      {React.Children.map(
        children,
        (child: React.ReactElement<TabItemProps>, i: number) => {
          return (
            <Tabs.Content
              value={i.toString()}
              key={i}
              className={styles.tabContent}
            >
              {child.props.children}
            </Tabs.Content>
          )
        }
      )}
    </Tabs.Root>
  )
}

const TabItem = ({ title, children }: TabItemProps) => {
  return children
}

Tab.Item = TabItem

export default Tab
