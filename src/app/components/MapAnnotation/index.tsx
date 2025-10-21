import './styles.css';
import { lightenHexColor } from "../../utils/baseHelper.ts";

type Annotation = {
  color?: string;
  icon?: string;
  text: string;
}

type Props = {
  values: Annotation[];
  horizontal?: boolean;
  mobile?: boolean;
}

export default function ColorAnnotation({ values, horizontal = false, mobile = false }: Props) {
  return <div className={`at-container ${horizontal ? 'at-horizontal' : ''} ${mobile ? 'at-mobile' : ''}`}>
    {
      values.map((value, i) => {
        return <div key={i} className={'at-item'}>
          {
            value.color ? <div className={"at-circle"} style={{
              borderColor: value.color,
              border: `2px solid ${value.color}`,
              backgroundColor: lightenHexColor(value.color, 70)
            }} /> :
              <div dangerouslySetInnerHTML={{ __html: value.icon as string }} />
          }
          <span>{value.text}</span>
        </div>
      })
    }
  </div>
}
