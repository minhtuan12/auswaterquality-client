export const APP_TITLE = "Water Justice Hub";
export const ACCESS_TOKEN = "accessToken";
export const EXPIRED_AT = "expiredAt";
export const MAX_THUMBNAIL_SIZE = 2 * 1024 * 1024;
export const MAX_COVER_SIZE = 2 * 1024 * 1024;
export const WATER_COLOR_ANNOTATION = [
  { color: '#008000', text: 'Fully compliant with ADWG guidelines' },
  { color: '#ffff00', text: 'Not fully compliant with acceptability-based ADWG' },
  { color: '#ff0000', text: 'Not fully compliant with health-based ADWG' },
  { color: '#000000', text: 'N/A' },
]
export const TRIANGLE_MARKERS = {
  empty: `
  <div class="tri-card">
    <svg class="triangle" viewBox="0 0 120 104" width="14" height="12"
         xmlns="http://www.w3.org/2000/svg" role="img"
         aria-label="Tam giác rỗng">
      <polygon
        points="60,4 4,100 116,100"
        fill="#999"
        stroke="#000"
        stroke-width="3"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </svg>
  </div>
  `,

  striped: `
  <div class="tri-card">
  <svg class="square" viewBox="0 0 80 80" width="11" height="11"
       xmlns="http://www.w3.org/2000/svg" role="img"
       aria-label="Hình vuông xám trơn">
    <rect x="0" y="0" width="80" height="80" fill="#999" stroke="#000" stroke-width="3" />
  </svg>
</div>
  `,

  dots: `
  <div class="tri-card">
    <svg class="triangle" viewBox="0 0 120 104" width="14" height="12"
         xmlns="http://www.w3.org/2000/svg" role="img"
         aria-label="Tam giác chấm">
      <defs>
        <pattern id="dots" patternUnits="userSpaceOnUse" width="14" height="14">
          <circle cx="6" cy="6" r="4" fill="#ffffff"></circle>
        </pattern>
        <clipPath id="triClip3">
          <polygon points="60,4 4,100 116,100" />
        </clipPath>
      </defs>

      <polygon points="60,4 4,100 116,100"
               fill="#999"
               stroke="#666"
               stroke-width="1.2"
               stroke-linejoin="round"/>
      <rect x="0" y="0" width="120" height="104"
            fill="url(#dots)" clip-path="url(#triClip3)"/>
    </svg>
  </div>
`
};
export const TRIANGLE_ANNOTATION = [
  { icon: TRIANGLE_MARKERS['empty'], text: 'Data available, not publicly released' },
  { icon: TRIANGLE_MARKERS['striped'], text: 'Data in process' },
  { icon: TRIANGLE_MARKERS['dots'], text: 'Data request sent' },
]