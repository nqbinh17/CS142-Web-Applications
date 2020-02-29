'use strict';
function Cs142TemplateProcessor(template)
{
    this.template=template;

    this.fillIn=function(dictionary){
        var temp = template;
        for(var i of Object.keys(dictionary)){

            temp = temp.replace("{{"+i+"}}", dictionary[i]);
            
        }
        return temp;
    };
}
