export class Logger {
    private static write(color: string, type: string, message: any): void {
        console.log(new Date().toLocaleString(), color, type.toUpperCase(), message)
    }

    public static debug(message: any): void {
        this.write("\x1b[92m%s\x1b[0m", "DEBUG", message)
    }

    public static info(message: any): void {
        this.write("\x1b[94m%s\x1b[0m", "INFO", message)
    }

    public static warn(message: any): void {
        this.write("\x1b[93m%s\x1b[0m", "WARN", message)
    }

    public static error(message: any): void {
        this.write("\x1b[91m%s\x1b[0m", "ERROR", message)
        if (typeof(message) == "object") {
            this.write("", "STACKTRACE", message.stack);
        }
    }

    public static fatal(message: any): void {
        this.write("\x1b[31m%s\x1b[0m", "ERROR", message)
        if (typeof(message) == "object") {
            this.write("", "STACKTRACE", message.stack);
        }
    }
}