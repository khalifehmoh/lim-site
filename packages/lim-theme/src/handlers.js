/* Make sure that when defining a handler that it has this structure:
    someHandler: {
        pattern: "{{url-pattern}}",
        func: ({state}) => {}
    }
*/

module.exports = {
    assesmentHandler: {
        pattern: "/assesment/",
        func: ({ state }) => {
            state.source.data["/assesment/"].isAssesment = true
        }
    }
}
