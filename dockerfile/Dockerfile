FROM node:12-stretch

# commands
# START -t sometagname END
# START -t sometagname:123 END

# -e = immediately execute next string of code
# the above container already has a default command, but this overrides it
# this cmd can also be overridden with additional args passed into docker run, like ls

# add a tag when building with --tag sometagname, otherwise it does not appear in vsc images
# version containers when building by adding :x to tag name. versions appear below tag name in vsc
CMD ["node", "-e", "console.log(\"wheyo! v 1\")"]
