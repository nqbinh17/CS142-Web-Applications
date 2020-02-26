'use strict';

function cs142MakeMultiFilter(originalArray)
{
    var currentArray=originalArray;
    return function arrayFilterer(filterCriteria,callback)
    {
        
        if (typeof filterCriteria === 'function')
        {
            var temp=[];
            for(var str of currentArray)
            {   
                if(filterCriteria(str)===true)
                {
                    temp.push(str);
                }
            }
            currentArray=temp;
            if (typeof callback === 'function')
            {
                var callthis=callback.bind(originalArray);
                callthis(currentArray);
            }
            return arrayFilterer;        
        }
        else 
        {
            return currentArray;
        }
    };
}
