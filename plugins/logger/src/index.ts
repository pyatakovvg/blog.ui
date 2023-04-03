
import { Plugin } from '@library/app';


type TLevelError = 'debug' | 'info' | 'warning' | 'error';


class LoggerPlugin extends Plugin {
  private _send(level: TLevelError, tag: string, value: any, meta?: any) {
    switch (level) {
      case 'debug': {
        console.debug(tag, value, meta);
      } break;
      case 'info': {
        console.info(tag, value, meta);
      } break;
      case 'warning': {
        console.warn(tag, value, meta);
      } break;
      case 'error': {
        console.error(tag, value, meta);
      } break;
    }
  }

  public debug(tag: string, value: any, meta?: any) {
    if (process.env.NODE_ENV === 'production') {
      this._send('debug', tag, value, meta);
    }
  }

  public info(tag: string, value: any, meta?: any) {
    this._send('info', tag, value, meta);
  }

  public warning(tag: string, value: any, meta?: any) {
    this._send('warning', tag, value, meta);
  }

  public error(tag: string, value: any, meta?: any) {
    this._send('error', tag, value, meta);
  }
}

export default LoggerPlugin;
