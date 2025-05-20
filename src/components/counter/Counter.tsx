import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./Counter.module.scss";

const Counter = () => {
  return (
    <div className={cn(styles.counter_sec, global.section_padding)}>
      <div className={cn(`${global.container}`)}>
        <div className={cn(styles.inner_sec)}>
          <div className={styles.grid_box}>
            <div className={styles.counter_box}>
              <div className={styles.counter_number}>
                <strong
                  className={cn(
                    "text-website-TEXT_PRIMARY font-normal",
                    global.extra2
                  )}
                >
                  120K
                </strong>
              </div>
              <div
                className={cn(
                  styles.counter_title,
                  global.head5,
                  " text-muted-textGray"
                )}
              >
                People belive in our service
              </div>
            </div>

            <div className={styles.counter_box}>
              <div className={styles.counter_number}>
                <strong
                  className={cn(
                    "text-website-TEXT_PRIMARY font-normal",
                    global.extra2
                  )}
                >
                  3200
                </strong>
              </div>
              <div
                className={cn(
                  styles.counter_title,
                  global.head5,
                  " text-muted-textGray"
                )}
              >
                People belive in our service
              </div>
            </div>

            <div className={styles.counter_box}>
              <div className={styles.counter_number}>
                <strong
                  className={cn(
                    "text-website-TEXT_PRIMARY font-normal",
                    global.extra2
                  )}
                >
                  45k
                </strong>
              </div>
              <div
                className={cn(
                  styles.counter_title,
                  global.head5,
                  " text-muted-textGray"
                )}
              >
                Partners who have worked with us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
