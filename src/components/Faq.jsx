import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <section className="mb-[15.25rem] overflow-hidden">
      <div className="mx-auto w-full max-w-[1276px] px-[15px]">
        <div className="section_heading mb-16 flex w-full items-end justify-start gap-8">
          FAQ
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="127"
            viewBox="0 0 120 127"
            fill="none"
          >
            <g clipPath="url(#clip0_38_3082)">
              <path
                d="M23.1418 14.9253C19.2136 16.5197 15.2855 18.1357 11.336 19.7301C8.41128 20.9151 4.24832 21.7769 1.75054 23.7591C-1.40904 26.2584 0.426935 29.6627 1.53706 32.8515C4.5472 41.4483 7.21576 50.1743 9.92702 58.8788C16.2675 79.2612 22.2024 99.8159 29.0553 120.026C29.6531 121.793 30.1654 125.52 31.8093 126.576C33.5171 127.653 37.1891 126.231 38.8543 125.8C50.9162 122.676 62.7006 118.302 74.6344 114.661C85.9704 111.192 97.4986 108.197 108.728 104.384C111.247 103.522 114.172 103.134 114.3 100.225C114.385 97.8768 112.571 94.3433 111.845 92.1671C110.414 87.7503 108.92 83.3549 107.426 78.9595C105.312 72.7113 103.156 66.4845 101 60.2578C100.53 58.9004 98.3526 59.4821 98.8436 60.861C102.644 71.7417 106.422 82.6439 109.988 93.6323C110.585 95.5067 111.973 98.1569 111.994 100.139C111.994 101.259 112.229 100.613 112.293 100.527C111.93 101.066 110.564 101.346 110.009 101.561C102.836 104.362 95.1716 106.193 87.7851 108.391C75.1254 112.14 62.5511 116.126 49.9768 120.112C46.0914 121.34 42.206 122.611 38.2779 123.624C37.2745 123.883 35.1183 124.788 34.0295 124.529C32.5351 124.184 32.7699 123.883 32.1508 122.094C26.2373 105.159 21.2417 87.9011 15.9687 70.7721C12.9158 60.8395 9.86298 50.8853 6.6607 40.9958C5.59327 37.7208 3.67191 34.0149 3.15954 30.6323C2.391 25.4828 7.89891 23.5437 11.9551 21.9062C15.8833 20.3118 19.8114 18.6959 23.7609 17.1015C25.0845 16.5628 24.5081 14.3867 23.1631 14.9253H23.1418Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M65.3905 7.3846C71.5389 6.02722 77.7726 4.99302 83.921 3.61408C83.4727 3.35553 83.003 3.09698 82.5547 2.81689C87.3154 17.6835 91.0941 32.8302 94.5526 48.0416C94.8728 49.4636 97.029 48.8603 96.7088 47.4383C93.2503 32.2269 89.4716 17.0802 84.7109 2.21361C84.5188 1.61032 83.9424 1.28713 83.3446 1.41641C77.1962 2.7738 70.9625 3.808 64.8141 5.18693C63.4051 5.48857 64.0028 7.68625 65.4118 7.36306L65.3905 7.3846Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M84.2412 73.4011C79.758 70.794 97.2852 47.8262 99.1211 45.0899C102.302 40.3498 105.504 35.2865 109.368 31.0635C111.076 29.189 115.325 25.6124 117.481 28.4134C118.762 30.0724 116.734 33.9076 115.986 35.308C112.101 42.6336 106.038 49.4206 101.235 56.1644C97.093 61.9818 91.1368 72.0652 83.3873 73.2718C81.9783 73.4873 82.576 75.6634 83.985 75.4479C94.0402 73.8751 101.662 59.4609 106.913 52.0276C110.756 46.5765 115.794 41.1901 118.612 35.1141C119.851 32.4425 120.939 28.6719 118.783 26.1511C112.016 18.136 99.1638 41.0177 96.6447 44.7667C92.1402 51.489 86.312 58.3836 82.9176 65.7308C81.8715 68.0146 80.2704 73.6596 83.1311 75.3186C84.3906 76.0512 85.5008 74.0905 84.2626 73.3795L84.2412 73.4011Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M81.8501 73.7889C81.4445 74.5215 81.0175 75.2541 80.6119 75.9866C79.8861 77.2578 81.8288 78.3997 82.5333 77.1285C82.9389 76.396 83.3659 75.6634 83.7715 74.9309C84.4973 73.6597 82.5546 72.5177 81.8501 73.7889Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M92.0975 53.9234C93.5919 57.3061 97.2211 59.3745 100.85 58.9005C102.259 58.7281 102.281 56.4658 100.85 56.6382C97.9043 57.026 95.2357 55.5178 94.0189 52.7815C93.4424 51.4672 91.4997 52.6091 92.0761 53.9234H92.0975Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M108.408 31.7312C109.795 34.2305 112.314 35.7387 115.132 35.868C116.563 35.9326 116.563 33.6703 115.132 33.6056C113.104 33.5195 111.332 32.3775 110.329 30.5892C109.625 29.318 107.682 30.46 108.386 31.7312H108.408Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M106.935 29.5985C105.568 28.7797 104.223 27.9825 102.857 27.1638C102.323 26.8406 101.662 27.0561 101.32 27.5732C98.993 31.0851 96.666 34.5971 94.339 38.0875C93.5277 39.2941 95.4705 40.436 96.2604 39.2295C98.5873 35.7175 100.914 32.2055 103.241 28.7151C102.729 28.8444 102.217 28.9952 101.704 29.1245C103.071 29.9432 104.415 30.7404 105.782 31.5591C107.02 32.2917 108.151 30.3526 106.913 29.62L106.935 29.5985Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M24.6148 12.5342C23.462 14.4518 30.4643 22.9408 30.934 23.2209C31.4463 23.5225 51.5566 17.2312 63.2556 13.5253C62.914 12.1248 64.4938 2.8601 62.3163 2.53691C60.1387 2.21372 25.7463 10.6166 24.6148 12.5342Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M23.526 12.2325C22.5226 15.9599 28.2654 24.1688 31.98 24.1904C36.0576 24.2335 41.416 21.4972 45.2588 20.3121C51.3644 18.4376 57.4488 16.5201 63.5331 14.6025C63.9601 14.4732 64.4084 14.0208 64.3443 13.5037C64.0241 10.5734 66.3724 3.05393 62.7219 1.50263C60.2454 0.446882 54.9296 2.68765 52.5173 3.24784C46.3475 4.66987 40.1992 6.19962 34.0935 7.94483C31.2968 8.74203 25.8957 9.40995 23.8035 11.7584C22.8428 12.8357 24.4226 14.4301 25.3833 13.3528C26.7069 11.8662 30.5069 11.3491 32.3002 10.832C36.3351 9.62541 40.4127 8.54811 44.4902 7.53546C48.2903 6.5659 52.1116 5.66097 55.9544 4.82069C57.3207 4.51904 58.9859 3.91576 60.3949 3.91576C62.2735 3.91576 61.6331 3.22629 62.2735 5.12233C62.7432 6.50126 62.5724 10.121 62.1241 11.5214C61.6331 12.965 62.2308 12.3617 61.7185 12.8357C61.0567 13.4606 59.242 13.6114 58.4095 13.8915C52.9229 15.6151 47.4363 17.3388 41.9497 19.0194C39.2598 19.8381 34.2856 22.4021 31.4036 22.0573C30.08 21.9065 32.5991 22.6822 31.2328 21.9496C30.6777 21.648 29.3328 19.6011 29.162 19.3641C28.2013 18.0929 25.2339 14.6671 25.7249 12.8788C26.1092 11.4783 23.953 10.8751 23.5687 12.2755L23.526 12.2325Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M26.3441 20.2042C21.1564 22.0571 15.9687 23.8885 10.7597 25.7415C10.3114 25.8923 10.0125 26.3448 10.1619 26.8188C14.7945 44.2063 20.6654 61.0982 26.3227 78.1625C29.6531 88.2244 32.3003 98.4802 35.4172 108.607C36.1858 111.106 36.7195 115.997 39.9218 115.932C43.8072 115.846 48.269 113.885 51.9837 112.851C58.9219 110.912 65.8602 108.865 72.7558 106.775C79.4592 104.75 86.1626 102.682 92.8234 100.527C96.1751 99.4282 101.213 98.6741 104.095 96.5195C106.828 94.4727 103.199 88.0951 102.323 85.6173C100.253 79.7569 98.0538 73.961 95.7908 68.1652C95.3852 67.131 93.6987 67.5835 94.1043 68.6392C95.8335 73.0561 97.5201 77.4946 99.1425 81.9545C100.189 84.8201 101.235 87.6642 102.174 90.5729C102.494 91.5424 102.708 92.5551 103.071 93.4816C103.434 94.4511 103.391 94.9036 103.391 94.9251C102.857 95.5931 100.701 96.024 99.9538 96.2825C97.7762 97.0797 95.556 97.7907 93.3571 98.5233C87.4863 100.441 81.5941 102.272 75.6805 104.082C64.5366 107.465 53.3713 110.998 42.0353 113.692C41.5015 113.821 39.7296 114.532 39.1532 114.273C38.4487 113.95 37.1464 108.348 36.8262 107.271C34.0509 98.0924 31.5958 88.8061 28.6284 79.6707C22.8856 61.9169 16.6519 44.4217 11.8271 26.3448C11.635 26.711 11.4215 27.0558 11.2293 27.4221C16.417 25.5691 21.6047 23.7377 26.8138 21.8848C27.8598 21.5185 27.4115 19.8164 26.3441 20.1827V20.2042Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M64.7073 12.7927C69.6388 11.8663 74.5703 10.9398 79.5232 10.0349C79.1602 9.84095 78.8187 9.62549 78.4557 9.43157C82.2131 24.6214 85.9918 39.8112 89.7491 55.001C90.0266 56.0998 91.6918 55.6258 91.4356 54.527C87.6783 39.3372 83.8996 24.1474 80.1423 8.95757C80.0142 8.46201 79.5232 8.2681 79.0748 8.35428C74.1433 9.28075 69.2118 10.2072 64.259 11.1121C63.1489 11.3276 63.6185 13.0082 64.7286 12.8143L64.7073 12.7927Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M23.3767 35.3726C28.3509 33.886 33.3037 32.3993 38.2779 30.9127C39.3454 30.5895 38.897 28.8873 37.8083 29.2105C32.8341 30.6972 27.8812 32.1839 22.907 33.6705C21.8396 33.9937 22.2879 35.6958 23.3767 35.3726Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M25.8103 40.8668C41.2452 36.1267 56.6589 31.3866 72.0938 26.6465C73.1613 26.3234 72.7129 24.6212 71.6242 24.9444C56.1892 29.6845 40.7756 34.4246 25.3406 39.1647C24.2732 39.4879 24.7215 41.19 25.8103 40.8668Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M24.1451 39.8542C24.3586 41.4917 24.8923 42.9999 25.8102 44.3788C26.4507 45.3053 27.9451 44.4219 27.3046 43.4954C26.5574 42.3966 26.0451 41.19 25.8743 39.8542C25.7249 38.7554 23.9956 38.7338 24.1237 39.8542H24.1451Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M26.707 44.1418C42.4835 39.7896 58.2814 35.4373 74.058 31.085C75.1467 30.7834 74.6771 29.1028 73.5883 29.3829C57.8117 33.7352 42.0138 38.0874 26.2373 42.4397C25.1485 42.7413 25.6182 44.4219 26.707 44.1418Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M71.3895 26.3881C71.3682 27.7671 71.7311 29.1029 72.4356 30.2879C73.012 31.2575 74.5277 30.3741 73.93 29.4046C73.3749 28.4781 73.0974 27.487 73.1187 26.3881C73.1187 25.2678 71.3895 25.2678 71.3682 26.3881H71.3895Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M28.9912 52.0492C37.7868 49.4853 46.561 46.8998 55.3566 44.3358C56.424 44.0126 55.9757 42.3321 54.8869 42.6337C46.0913 45.1977 37.3171 47.7832 28.5215 50.3471C27.4541 50.6703 27.9024 52.3509 28.9912 52.0492Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M31.169 58.3189C47.1803 52.8893 63.2131 47.4382 79.2245 42.0087C80.2705 41.6424 79.8222 39.9618 78.7548 40.3066C62.7434 45.7361 46.7107 51.1872 30.6993 56.6168C29.6532 56.983 30.1015 58.6636 31.169 58.3189Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M29.8453 58.4911C30.3577 59.633 30.8914 60.7965 31.4038 61.9384C31.8734 62.9726 33.3678 62.0677 32.8982 61.0551C32.3858 59.9131 31.8521 58.7497 31.3397 57.6077C30.8701 56.5735 29.3757 57.4785 29.8453 58.4911Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M32.3003 62.4126C48.0555 56.8754 63.7894 51.3381 79.5446 45.8008C80.5906 45.4345 80.1423 43.7324 79.0749 44.0987C63.3197 49.636 47.5858 55.1732 31.8306 60.7105C30.7846 61.0768 31.2329 62.7789 32.3003 62.4126Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M78.2209 42.052V45.4993C78.2209 46.6197 79.9715 46.6413 79.9715 45.4993V42.052C79.9715 40.9316 78.2209 40.9101 78.2209 42.052Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M35.4385 67.5406C42.2273 64.9551 49.1656 63.016 56.296 61.6586C57.4061 61.4431 56.9364 59.7625 55.8263 59.9565C48.6959 61.2923 41.7576 63.253 34.9688 65.8385C33.9227 66.2263 34.3711 67.9284 35.4385 67.5406Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M37.5307 71.8925C52.2825 67.5403 67.0344 63.2096 81.7862 58.8573C82.8536 58.5341 82.4053 56.8536 81.3165 57.1552C66.5647 61.5075 51.8129 65.8382 37.061 70.1904C35.9936 70.5136 36.4419 72.1942 37.5307 71.8925Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M35.9297 72.1081C36.3353 73.681 36.7409 75.2538 37.1252 76.8267C37.4027 77.9255 39.0892 77.4515 38.8117 76.3527C38.4061 74.7798 38.0005 73.207 37.6162 71.6341C37.3387 70.5353 35.6521 71.0093 35.9297 72.1081Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M38.2778 77.0421C52.9015 72.4744 67.5039 67.8852 82.1276 63.3174C83.1951 62.9943 82.7467 61.2921 81.658 61.6153C67.0342 66.183 52.4319 70.7723 37.8081 75.34C36.7407 75.6632 37.189 77.3653 38.2778 77.0421Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M81.6153 58.6206C81.8288 59.6764 82.0209 60.7106 82.2344 61.7663C82.4479 62.8652 84.1344 62.4127 83.921 61.2923C83.7075 60.2366 83.5153 59.2024 83.3019 58.1466C83.0884 57.0478 81.4018 57.5003 81.6153 58.6206Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M39.5376 83.3552C46.0915 81.4376 52.6242 79.52 59.1782 77.6024C60.2456 77.2793 59.7973 75.5987 58.7085 75.9003C52.1545 77.8179 45.6219 79.7355 39.0679 81.6531C38.0005 81.9762 38.4488 83.6568 39.5376 83.3552Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M41.8859 88.8926C51.6421 85.6176 61.3984 82.3642 71.1547 79.0892C70.9412 78.5506 70.7064 78.0119 70.4929 77.4948C70.2794 77.6241 70.0659 77.7749 69.8738 77.9042C68.9344 78.529 69.8097 80.0372 70.7491 79.4124C70.9625 79.2831 71.176 79.1323 71.3682 79.003C72.1581 78.4859 71.667 77.0639 70.7064 77.3871C60.9501 80.6621 51.1938 83.9155 41.4375 87.1904C40.3701 87.5352 40.8398 89.2373 41.9072 88.8926H41.8859Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M40.6476 88.1596C40.8824 90.228 41.5015 92.1671 42.5903 93.9554C43.1667 94.925 44.6824 94.0416 44.0847 93.0721C43.1667 91.5639 42.5903 89.9264 42.3981 88.1596C42.2701 87.0392 40.5408 87.0392 40.6476 88.1596Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M43.8285 93.5895C53.1791 89.9267 62.6365 86.5224 72.1793 83.4198C73.2467 83.0751 72.777 81.373 71.7096 81.7177C62.1668 84.8418 52.7094 88.2245 43.3588 91.8873C42.3341 92.2967 42.7824 93.9988 43.8285 93.5895Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M69.7243 79.0246C70.0445 80.1665 70.3648 81.33 70.685 82.4719C70.9839 83.5492 72.6704 83.0967 72.3715 81.9979C72.0513 80.856 71.7311 79.6925 71.4108 78.5506C71.112 77.4733 69.4254 77.9257 69.7243 79.0246Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M44.8106 100.268C59.3916 94.7527 74.1434 89.7541 89.0447 85.251C90.1121 84.9278 89.6638 83.2257 88.575 83.5489C73.6524 88.0304 58.9006 93.0506 44.3409 98.5663C43.2948 98.9542 43.7431 100.656 44.8106 100.268Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M44.1274 99.3637C44.6612 101.023 45.1949 102.703 45.7286 104.362C46.0702 105.44 47.7567 104.966 47.4151 103.888C46.8814 102.229 46.3477 100.549 45.814 98.8897C45.4724 97.8124 43.7859 98.2864 44.1274 99.3637Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M47.0308 104.772C60.8647 99.1266 74.912 94.0849 89.1942 89.6895C90.2616 89.3663 89.8133 87.6642 88.7245 87.9874C74.4637 92.3827 60.395 97.4245 46.5612 103.069C45.5364 103.479 45.9848 105.181 47.0308 104.772Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M87.8918 84.6261C88.2974 85.9835 88.7244 87.3409 89.13 88.6983C89.4502 89.7756 91.1368 89.3231 90.8166 88.2243C90.4109 86.8669 89.984 85.5095 89.5783 84.1521C89.2581 83.0748 87.5716 83.5273 87.8918 84.6261Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M40.1138 7.55706C39.5587 3.18326 45.1307 1.63196 46.8386 5.68257C47.3936 7.01841 49.3364 5.85494 48.7599 4.54064C47.6925 2.01978 44.8745 0.490028 42.1846 1.09331C39.3453 1.73969 37.4879 4.69146 37.8509 7.55706C38.0216 8.97908 40.2632 9.00063 40.0925 7.55706H40.1138Z"
                fill="#F8F7FF"
              ></path>
              <path
                d="M94.3818 40.8454C95.8548 41.7288 97.8616 41.4702 98.9504 40.0913C100.061 38.6908 99.8684 36.7086 98.7369 35.4159C97.7762 34.3386 96.1964 35.933 97.1571 37.0103C98.1605 38.1522 96.7515 39.6388 95.5133 38.8847C94.2751 38.1306 93.1436 40.0913 94.3818 40.8239V40.8454Z"
                fill="#F8F7FF"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_38_3082">
                <rect
                  width="120"
                  height="126"
                  fill="white"
                  transform="translate(0 0.963867)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="flex w-full flex-col gap-8">
          <Accordion title="How to Buy" content="Go to uniswap" />
          <Accordion title="How to Sell" content="Go to sushiswap" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
