import React, {useEffect} from "react"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import i18n from "../../i18n";
export const Language = () => {
    const [lang, setLang] = React.useState('English');
    const handleChange = (event) => {
        setLang(event.target.value);
    };
    useEffect(() => {
      if(lang) {
        i18n.changeLanguage(lang)
      }
    }, [lang])
    return (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          onChange={handleChange}
          style={{margin: "1% 0 0 10%"}}
        >
          <MenuItem value={"English"}>English</MenuItem>
          <MenuItem value={"Japanese"}>Japanese</MenuItem>
    
        </Select>
    )
}
export default Language