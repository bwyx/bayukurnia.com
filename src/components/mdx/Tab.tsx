import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { ScrollArea } from '~/components'

import { css } from '~/styles'
import { stack } from '~/styles/primitives'
import text from '~/styles/sprinkles/text.css'

interface TabProps {
  children: React.ReactNode
  defaultTab?: number
  height?: string
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
  tabTrigger: `${text({
    fontSize: 'xs',
    letterSpacing: 'wide'
  })} ${css({
    padding: '$1 $2',
    borderBottom: '1px solid transparent',
    xColor: '$fg3',
    '&[data-state="active"]': {
      xColor: '$brand',
      borderColor: 'rgb($rgb$brand)'
    }
  })()}`,
  tabContent: css({
    borderRadius: '$lg',
    'pre:first-child': {
      borderRadius: 0,
      marginTop: 0,
      marginBottom: 0
    }
  })()
}

const Tab = ({
  children,
  defaultTab = 0,
  height = 'fit-content'
}: TabProps) => {
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
              <ScrollArea height={height}>{child.props.children}</ScrollArea>
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
