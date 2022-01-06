import * as React from 'react';

const AnnounceSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5291 0.48767C18.7116 0.548253 18.8625 0.678832 18.9487 0.850685C19.0349 1.02254 19.0493 1.22159 18.9887 1.40407L18.2637 3.57907C18.203 3.76174 18.0721 3.91279 17.9 3.99899C17.7279 4.08519 17.5286 4.09948 17.3459 4.03872C17.1632 3.97796 17.0122 3.84712 16.926 3.67499C16.8398 3.50286 16.8255 3.30354 16.8862 3.12087L17.6112 0.94587C17.6414 0.855487 17.689 0.77193 17.7515 0.699977C17.8139 0.628024 17.89 0.569085 17.9752 0.526531C18.0604 0.483976 18.1532 0.458641 18.2483 0.451973C18.3433 0.445305 18.4387 0.457435 18.5291 0.48767V0.48767ZM23.8897 3.13827C23.9571 3.07086 24.0106 2.99084 24.0471 2.90277C24.0836 2.81469 24.1024 2.7203 24.1024 2.62497C24.1024 2.52964 24.0836 2.43525 24.0471 2.34717C24.0106 2.2591 23.9571 2.17908 23.8897 2.11167C23.8223 2.04426 23.7423 1.99079 23.6542 1.95431C23.5662 1.91783 23.4718 1.89905 23.3764 1.89905C23.2811 1.89905 23.1867 1.91783 23.0986 1.95431C23.0106 1.99079 22.9305 2.04426 22.8631 2.11167L19.9631 5.01167C19.8957 5.07898 19.8422 5.15891 19.8057 5.2469C19.7692 5.33488 19.7504 5.4292 19.7503 5.52446C19.7502 5.71685 19.8265 5.90141 19.9624 6.03754C20.0984 6.17368 20.2828 6.25024 20.4752 6.25037C20.6676 6.25051 20.8522 6.17421 20.9883 6.03827L23.8883 3.13827H23.8897ZM9.03014 3.56022C9.23256 3.13436 9.53576 2.76428 9.91348 2.48204C10.2912 2.19981 10.732 2.01393 11.1978 1.94052C11.6636 1.8671 12.1402 1.90837 12.5864 2.06073C13.0327 2.2131 13.435 2.47197 13.7586 2.81492L23.3097 12.9359C23.6285 13.2736 23.8615 13.6829 23.9891 14.1294C24.1167 14.5758 24.1353 15.0464 24.0432 15.5015C23.9511 15.9567 23.7511 16.383 23.46 16.7448C23.1688 17.1065 22.7951 17.393 22.3701 17.5803L16.6615 20.0975C16.8731 20.8522 16.9072 21.6456 16.7612 22.4157C16.6152 23.1858 16.293 23.9117 15.8198 24.5366C15.3465 25.1614 14.7352 25.6683 14.0335 26.0176C13.3318 26.3669 12.5588 26.5491 11.775 26.55C10.9111 26.5504 10.0614 26.3302 9.30649 25.9103C8.55155 25.4903 7.9164 24.8845 7.46124 24.1502L5.72124 24.9158C5.32152 25.0921 4.87798 25.1439 4.4484 25.0645C4.01882 24.9851 3.6231 24.7782 3.31279 24.4707L1.54089 22.7147C1.2205 22.3974 1.00667 21.9883 0.928992 21.5441C0.851318 21.0998 0.913643 20.6425 1.10734 20.2352L9.03014 3.56167V3.56022ZM8.80684 23.5557C9.28809 24.2427 9.9927 24.7416 10.8006 24.9673C11.6085 25.193 12.4696 25.1315 13.2372 24.7933C14.0048 24.4552 14.6314 23.8613 15.0102 23.1129C15.389 22.3645 15.4965 21.5079 15.3144 20.6891L8.80684 23.5557V23.5557ZM12.7044 3.80962C12.5425 3.63835 12.3413 3.50913 12.1182 3.43315C11.8951 3.35717 11.6569 3.33671 11.4241 3.37356C11.1913 3.41041 10.971 3.50344 10.7822 3.64461C10.5935 3.78578 10.442 3.97082 10.3409 4.18372L2.41669 20.8587C2.35252 20.9943 2.332 21.1465 2.35797 21.2943C2.38394 21.4421 2.45512 21.5782 2.56169 21.6838L4.33359 23.4383C4.43684 23.5407 4.56852 23.6098 4.71152 23.6364C4.85452 23.663 5.00223 23.646 5.13544 23.5876L21.7843 16.255C21.9968 16.1615 22.1837 16.0183 22.3293 15.8376C22.4749 15.6568 22.575 15.4438 22.6212 15.2163C22.6674 14.9888 22.6583 14.7536 22.5947 14.5304C22.531 14.3071 22.4148 14.1025 22.2556 13.9335L12.7044 3.81252V3.80962ZM22.65 7.69997C22.4577 7.69997 22.2733 7.77635 22.1373 7.91232C22.0014 8.04828 21.925 8.23269 21.925 8.42497C21.925 8.61725 22.0014 8.80166 22.1373 8.93762C22.2733 9.07359 22.4577 9.14997 22.65 9.14997H24.825C25.0173 9.14997 25.2017 9.07359 25.3376 8.93762C25.4736 8.80166 25.55 8.61725 25.55 8.42497C25.55 8.23269 25.4736 8.04828 25.3376 7.91232C25.2017 7.77635 25.0173 7.69997 24.825 7.69997H22.65Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const AnnounnceIcon = React.memo(AnnounceSVG);
