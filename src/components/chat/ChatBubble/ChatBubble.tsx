import { memo } from 'react'

import styles from './ChatBubble.css'

export interface ChatBubbleProps {
  text: string
  color: 'brown' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan'
  time: number
  host?: boolean
}

const ChatBubble = ({ text, time, ...msg }: ChatBubbleProps) => {
  return <span className={styles.bubble({ ...msg })}>{text}</span>
}

const quotes = [
  'Programmer: A machine that turns coffee into code.', // https://devrant.com/rants/343239/definition-of-programmer-a-machine-that-turns-coffee-into-code
  'Computers are fast; programmers keep it slow.', // https://www.reddit.com/r/ProgrammerHumor/comments/j7bcx1/computers_are_fast_programmers_keep_it_slow/
  'When I wrote this code, only God and I understood what I did. Now only God knows.', // https://www.reddit.com/r/ProgrammerHumor/comments/j7t8ju/just_need_to_replace_that_face_with_mine_collected/
  "A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don't touch!", // http://www.jokeexplainer.com/2017/04/how-many-programmers-does-it-take-to.html
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.", // http://www.jokeexplainer.com/2017/04/how-many-programmers-does-it-take-to.html
  'Programming is like sex: One mistake and you have to support it for the rest of your life.', // https://www.reddit.com/r/learnprogramming/comments/1v74h4/programming_is_like_sex_one_mistake_and_you_have/
  'Programming can be fun, and so can cryptography; however, they should not be combined.', // https://chaunhblog.wordpress.com/about/
  'Copy-and-Paste was programmed by programmers for programmers actually.', // https://www.reddit.com/r/ProgrammerHumor/comments/j7usab/copypaste_was_programmed_by_programmers_for/
  'Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.', // https://stackoverflow.com/questions/876089/who-wrote-this-programing-saying-always-code-as-if-the-guy-who-ends-up-maintai
  "Algorithm: Word used by programmers when they don't want to explain what they did.", // https://www.amazon.com/Algorithm-Word-Used-Programmers-Explain/dp/1081977302
  'Software and cathedrals are much the same — first we build them, then we pray.', // https://simonecarletti.com/quotes/52a5eb7c0d52b0753b00000a/
  'There are two ways to write error-free programs; only the third works.', // https://www.brainyquote.com/quotes/alan_perlis_177353
  'If debugging is the process of removing bugs, then programming must be the process of putting them in.', // https://www.reddit.com/r/ProgrammerHumor/comments/85jsp6/if_debugging_is_the_process_of_removing_software/
  '99 little bugs in the code. 99 little bugs in the code. Take one down, patch it around. 127 little bugs in the code ...', // https://imgur.com/gallery/HTisMpC
  'Remember that there is no code faster than no code.', // https://twitter.com/kevlinhenney/status/538296047899267073?lang=en
  "One man's crappy software is another man's full-time job.", // https://devrant.com/rants/33509/one-man-s-crappy-software-is-another-man-s-full-time-job-jessica-gaston
  'No code has zero defects.', // https://twitter.com/elye_project/status/1314157801908760577
  'A good programmer is someone who always looks both ways before crossing a one-way street.', // https://devrant.com/rants/1008388/a-good-programmer-is-someone-who-always-looks-both-ways-before-crossing-a-one-wa
  'Deleted code is debugged code.', // https://devrant.com/rants/1410556/deleted-code-is-debugged-code-jeff-sickel
  "Don't worry if it doesn't work right. If everything did, you'd be out of a job.", // https://devrant.com/rants/838404/dont-worry-if-it-doesnt-work-right-if-everything-did-youd-be-out-of-a-job-mosher
  "It's not a bug — it's an undocumented feature.", // https://www.amazon.com/Its-Not-Undocumented-Feature-Shirt/dp/B07L92D2DT
  'It works on my machine.', // https://www.reddit.com/r/ProgrammerHumor/comments/70we66/it_works_on_my_machine/
  'It compiles; ship it.', // http://www.quickmeme.com/meme/3omp2t

  'When all else fails … reboot.', // https://www.redbubble.com/i/water-bottle/When-All-Else-Fails-Reboot-by-bitgeeky/39432825.Y6CDO
  'There is an easy way and a hard way. The hard part is finding the easy way.', // https://www.reddit.com/r/learnprogramming/comments/1v74h4/programming_is_like_sex_one_mistake_and_you_have/cepjlc7
  "There's no place like 127.0.0.1.", // https://medium.com/@hackersleaguebooks/theres-no-place-like-127-0-0-1-explained-1e6af9368e32
  'Keyboard Failure. Press F1 to continue.', // https://www.experts-exchange.com/questions/27578625/Keyboard-Failure-Press-F1-to-continue-But-it-can't.html
  'Linux is only free if your time has no value.', // https://www.reddit.com/r/linuxmasterrace/comments/4cew7j/what_do_you_think_of_linux_is_only_free_if_your/
  'To understand what recursion is, you must first understand recursion.' // https://medium.com/@leog7one/to-understand-recursion-you-must-first-understand-recursion-recursion-explained-c574245cf788
]

const shuffle = <T extends any>(array: T[]) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

export const ChatBubblePlaceholder = ({
  text,
  host
}: {
  text?: string
  host?: boolean
}) => {
  return (
    <span className={styles.bubble({ host, placeholder: true })}>
      {text ?? shuffle(quotes)}
    </span>
  )
}

export default memo(ChatBubble)
