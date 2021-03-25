import moment from 'moment';
import fs from 'fs';

interface LoggerInterface {
  write(text: any): void
}

class Logger implements LoggerInterface {

  private file = null;

  constructor(file?: any){
    file && (this.file = file);
  }

  /**
   * Log to file.
   * @param {string} text Text to log.
   * @param {string} [file] Log file path.
   */
   public write(text: any) {

    // Save log to file.
    fs.appendFile(
      this.file || 'default.log',
      this.logText(text),
      'utf8',
      (error) => error && (
        console.log(`${this.getDateAsText()} -> ${error}`)
      )
    );
  }

  /**
   * Get date as text.
   * @returns {string} Date as text. Sample: "Sunday, February 14th 2010, 3:25:50 pm".
   */
  public getDateAsText = () => (
    moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
  )

  /**
   *
   * @returns
   */
   private logText = (text: any): string => (
     `${this.getDateAsText()} -> ${text}'\r\n'`
  )

}

export { Logger };
