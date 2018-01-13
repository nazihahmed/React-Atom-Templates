
module.exports = {

    name: "React Class Component",

    directory: false,

    params: ["Name"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: config["Name"]+".js", sourceTemplateFile: "index.template" }
        ]
      });

    }

}
