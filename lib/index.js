const babel = require('babel-core')

function delConsoleVisitor ({ types: t }) {
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'alpha') {
        return {
            visitor: {
                CallExpression (path) {
                    let node = path.node
                    if (node.callee.object && node.callee.object.name === 'console' && node.callee.property && node.callee.property.name === 'log') {
                        path.remove()
                    }
                }
            }
        }
    } else {
        return {
            visitor: {}
        }
    }
}

module.exports = delConsoleVisitor