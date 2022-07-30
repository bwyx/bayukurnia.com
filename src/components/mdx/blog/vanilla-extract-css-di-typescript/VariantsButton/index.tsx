import { useState } from 'react'
import Button from './VariantsButton'

import styles from './AllButtons.css'

function AllButtons() {
  const [loading, setLoading] = useState(false)

  const onClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const props = {
    onClick,
    loading
  }

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.buttonContainer}>
          <Button
            color="pink"
            variant="contained"
            size="small"
            rounded={false}
            {...props}
          >
            Button
          </Button>
          <Button
            color="pink"
            variant="outlined"
            size="normal"
            rounded="md"
            {...props}
          >
            Button
          </Button>
          <Button
            color="pink"
            variant="text"
            size="large"
            rounded="2xl"
            {...props}
          >
            Button
          </Button>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            color="pink"
            variant="contained"
            size="small"
            rounded="xs"
            {...props}
          >
            Button
          </Button>
          <Button
            color="pink"
            variant="outlined"
            size="normal"
            rounded="lg"
            {...props}
          >
            Button
          </Button>
          <Button
            color="pink"
            variant="text"
            size="large"
            rounded="3xl"
            {...props}
          >
            Button
          </Button>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            color="pink"
            variant="contained"
            size="small"
            rounded="sm"
            {...props}
          >
            Button
          </Button>
          <Button
            color="pink"
            variant="outlined"
            size="normal"
            rounded="xl"
            {...props}
          >
            Button
          </Button>
          <Button color="pink" variant="text" size="large" rounded {...props}>
            Button
          </Button>
        </div>
      </div>
      <div className={styles.inner}>
        <div className={styles.buttonContainer}>
          <Button
            color="gray"
            variant="contained"
            size="small"
            rounded={false}
            {...props}
          >
            Button
          </Button>
          <Button
            color="gray"
            variant="outlined"
            size="normal"
            rounded="md"
            {...props}
          >
            Button
          </Button>
          <Button
            color="gray"
            variant="text"
            size="large"
            rounded="2xl"
            {...props}
          >
            Button
          </Button>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            color="gray"
            variant="contained"
            size="small"
            rounded="xs"
            {...props}
          >
            Button
          </Button>
          <Button
            color="gray"
            variant="outlined"
            size="normal"
            rounded="lg"
            {...props}
          >
            Button
          </Button>
          <Button
            color="gray"
            variant="text"
            size="large"
            rounded="3xl"
            {...props}
          >
            Button
          </Button>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            color="gray"
            variant="contained"
            size="small"
            rounded="sm"
            {...props}
          >
            Button
          </Button>
          <Button
            color="gray"
            variant="outlined"
            size="normal"
            rounded="xl"
            {...props}
          >
            Button
          </Button>
          <Button color="gray" variant="text" size="large" rounded {...props}>
            Button
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AllButtons
