export class Error {
    
    constructor(
        public code: number,
        public message: string,
        public reason: string
    ) { }
}
