export class LogService {

  write(logMessage: string, on: boolean) {
    if (on) {
      console.log(logMessage);
    }
  }
}
