
/**
* Each model element has an unique property containing the key and followed by URL params

* Each model element contains fields like a title and a validation object
* A validation object can have fields like regex, required, minValue, maxValue, minLength, maxLength
*/
function getDemoModel(){
    return [
        {
            key: 'productId',
            title:'Article No.',
            validation:{regex:/[0-9]{6,9}/, required:true, msg:'Numeric values between of 6 to 9 digits'}
        },
        {
            key: 'shortDescription',
            title:'Title',
            validation:{required:true, maxLength:180, msg:'Required value has a maxLength of 180'}
        },
        {
            key:'longDescription',
            title:'Description',
            validation:{minLength:30, msg:'No minLength of 30'}
        },
        {
            key:'stock',
            title:'Lagerbestand',
            validation:{minValue:0,maxValue:9999999999, msg:'Not in range of 0 to 9999999999'}
        },
        {
            key:'status',
            title:'Status',
            validation:{values:['100','300','400'], msg:'Not in list.'}
        }
    ]
}
