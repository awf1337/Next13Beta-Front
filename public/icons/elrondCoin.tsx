interface Props {
  width?: number;
  height?: number;
}
const ElrondCoinIcon = ({ width = 32, height = 32 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 2500 2500"
      width={width}
      height={height}
      xmlSpace="preserve"
    >
      <g id="Layer_x0020_1">
        <g id="_2090875320704">
          <rect
            y="0"
            className="st0"
            width="2500"
            height="2500"
            rx="500"
            ry="500"
          ></rect>
          <g>
            <path
              className="st1"
              d="M1313,1250l527-275l-88-165l-483,192c-11,5-27,5-38,0L748,810l-88,165l527,275l-527,275l88,165l483-192     c11-5,27-5,38,0l483,192l88-165L1313,1250z"
              style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                fill: '#23F7DD',
              }}
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ElrondCoinIcon;
