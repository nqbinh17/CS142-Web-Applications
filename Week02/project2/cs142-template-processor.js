'use strict';
function Cs142TemplateProcessor(template)
{
    this.template=template;

    this.fillIn=function(dictionary){
        var result=this.template;
        for(var item in dictionary)
        {
            result=result.replace(`{{${item}}}`,dictionary[item]);
        }
        return result;
    };
}
