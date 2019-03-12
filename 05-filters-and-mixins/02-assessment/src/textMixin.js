export const textMixin = {
    computed: {
        computedReverseText() {
            return this.text
                .split("")
                .reverse()
                .join("");
        },
        computedCharCount() {
            return `${this.text2} (${this.text2.length})`;
        }
    },
    created() {
        console.log('textMixin created');
    }
}