export default function({lable,value,onChange,type='text'}){
    return(
        <div className="field">
            <label className="lable">{lable}</label>

            <input className="input" 
            value={value}
            placeholder={placeholder}
            type={type}
            onChange={(e)=>onChange(e.target.value)}
            />
        </div>
    )
}