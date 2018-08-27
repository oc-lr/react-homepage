import React from "react"

export function Bloomberg({ scale = 1, color = "black" }) {
  return (
    <svg
      width={800 * scale}
      height={118 * scale}
      viewBox="0 0 800 118"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <g fill={color} fillRule="nonzero">
          <g>
            <rect x="486.667" y="0.37" width="5.926" height="116.667" />
            <path d="M30.3703704,67.0370388 C34.2592592,67.0370388 36.8518518,64.6296312 36.8518518,60.7407424 C36.8518518,56.6666684 33.8888889,54.444446 30.1851852,54.444446 L17.4074074,54.444446 L17.4074074,67.0370388 L30.3703704,67.0370388 Z M28.7037037,42.222224 C32.2222222,42.222224 34.4444444,40.5555572 34.4444444,37.0370387 C34.4444444,33.7037053 32.037037,31.6666683 28.5185185,31.6666683 L17.4074074,31.6666683 L17.4074074,42.222224 L28.7037037,42.222224 Z M0,17.2222238 L31.8518518,17.2222238 C37.7777778,17.2222238 42.4074076,18.7037053 45.5555556,21.2962979 C49.2592592,24.2592609 51.4814816,28.7037053 51.4814816,34.0740757 C51.4814816,40.1851868 49.074074,44.0740756 43.8888888,46.4814832 L43.8888888,46.6666684 C50.5555556,48.8888904 54.4444444,54.8148164 54.4444444,62.222224 C54.4444444,69.2592608 51.851852,74.444446 47.4074076,77.5925944 C43.7037036,80.370372 38.8888889,81.6666684 32.5925926,81.6666684 L0,81.6666684 L0,17.2222238 Z M57.5925924,17.2222238 L74.2592591,17.2222238 L74.2592591,81.8518534 L57.5925924,81.8518534 L57.5925924,17.2222238 Z M77.0370372,58.8888904 C77.0370372,44.8148164 86.4814816,34.4444461 101.111111,34.4444461 C115.740741,34.4444461 125,45.0000016 125,58.8888904 C125,72.7777796 115.740741,83.3333348 101.111111,83.3333348 C86.4814816,83.3333348 77.0370372,72.7777796 77.0370372,58.8888904 Z M126.851852,58.8888904 C126.851852,44.8148164 136.296296,34.4444461 150.925926,34.4444461 C165.555556,34.4444461 174.814815,45.0000016 174.814815,58.8888904 C174.814815,72.7777796 165.555556,83.3333348 150.925926,83.3333348 C136.296296,83.3333348 126.851852,72.7777796 126.851852,58.8888904 Z M178.333333,35.7407424 L193.703704,35.7407424 L193.703704,42.5925944 L193.888889,42.5925944 C197.037037,37.2222238 201.111111,34.2592609 207.777778,34.2592609 C213.703704,34.2592609 217.962963,37.2222238 220.185185,42.222224 L220.37037,42.222224 C224.074074,36.1111128 229.074074,34.2592609 234.62963,34.2592609 C245.37037,34.2592609 250,42.222224 250,52.7777796 L250,81.8518536 L233.703704,81.8518536 L233.703704,55.9259276 C233.703704,51.296298 232.222222,48.1481496 228.148148,48.1481496 C224.074074,48.1481496 222.037037,51.8518536 222.037037,56.8518536 L222.037037,81.8518536 L205.740741,81.8518536 L205.740741,55.9259276 C205.740741,51.296298 204.259259,48.1481496 200.185185,48.1481496 C196.111111,48.1481496 194.074074,51.8518536 194.074074,56.8518536 L194.074074,81.8518536 L177.777778,81.8518536 L177.777778,35.7407424 L178.333333,35.7407424 Z M270.555556,75.9259276 L270.37037,81.8518536 L255,81.8518536 L255,17.2222238 L271.296296,17.2222238 L271.296296,40.5555572 L271.481482,40.5555572 C274.62963,36.4814831 278.518518,34.2592609 284.444444,34.2592609 C296.296296,34.2592609 302.962963,45.370372 302.962963,58.7037052 C302.962963,74.444446 295.925926,83.3333348 284.259259,83.3333348 C278.518518,83.3333348 273.333333,81.1111128 270.555556,75.9259276 Z M305.555556,58.7037052 C305.555556,44.8148164 315,34.2592609 328.888889,34.2592609 C335.740741,34.2592609 340.925926,36.6666683 345,40.5555572 C350.37037,45.7407424 352.777778,53.8888904 352.592592,63.1481496 L321.296296,63.1481496 C322.222222,68.51852 325,71.6666684 329.814815,71.6666684 C332.592592,71.6666684 334.62963,70.5555572 335.925926,68.1481496 L351.666667,68.1481496 C350.740741,72.222224 347.592592,76.296298 343.333333,79.2592608 C339.259259,82.0370388 335,83.1481496 329.259259,83.1481496 C315.185185,83.1481496 305.555556,72.7777796 305.555556,58.7037052 Z M370.185185,42.5925944 L370.37037,42.5925944 C373.888889,36.8518535 378.148148,34.6296312 383.703704,34.6296312 C385,34.6296312 385.925926,34.8148164 386.296296,35.0000016 L386.296296,49.6296312 L385.925926,49.6296312 C376.481482,47.9629644 370.740741,52.4074092 370.740741,62.7777796 L370.740741,81.8518536 L354.444444,81.8518536 L354.444444,35.7407424 L369.814815,35.7407424 L369.814815,42.5925944 L370.185185,42.5925944 Z M388.888889,82.5925944 L404.444444,82.5925944 C405,84.444446 407.037036,86.4814832 410.925924,86.4814832 C416.111112,86.4814832 417.962964,83.1481496 417.962964,78.51852 L417.962964,74.444446 L417.592592,74.444446 C415,77.5925944 411.666668,79.6296312 406.48148,79.6296312 C396.481482,79.6296312 387.777778,72.222224 387.777778,57.7777796 C387.777778,44.6296312 394.814815,34.2592609 405.74074,34.2592609 C411.851852,34.2592609 415.74074,36.8518535 418.148148,40.7407424 L418.333332,40.7407424 L418.333332,35.7407424 L433.703704,35.7407424 L433.703704,76.296298 C433.703704,83.7037052 431.111112,89.444446 427.222224,92.7777796 C423.148148,96.4814832 417.407408,97.7777796 410.925924,97.7777796 C398.888889,97.9629644 390.37037,92.7777796 388.888889,82.5925944 Z M418.703704,57.0370388 C418.703704,51.296298 415.925924,46.6666684 411.296296,46.6666684 C406.666668,46.6666684 403.888888,50.7407424 403.888888,57.0370388 C403.888888,63.1481496 406.851852,67.5925944 411.296296,67.5925944 C415.925924,67.5925944 418.703704,63.1481496 418.703704,57.0370388 Z M108.518518,58.8888904 C108.518518,51.1111128 105.925926,45.9259276 100.925926,45.9259276 C95.925926,45.9259276 93.5185184,51.1111128 93.5185184,58.8888904 C93.5185184,66.6666684 95.925926,71.8518536 100.925926,71.8518536 C105.925926,71.8518536 108.518518,66.6666684 108.518518,58.8888904 Z M158.148148,58.8888904 C158.148148,51.1111128 155.555556,45.9259276 150.555556,45.9259276 C145.555556,45.9259276 143.148148,51.1111128 143.148148,58.8888904 C143.148148,66.6666684 145.555556,71.8518536 150.555556,71.8518536 C155.555556,71.8518536 158.148148,66.6666684 158.148148,58.8888904 Z M286.296296,58.51852 C286.296296,51.296298 283.703704,46.6666684 278.703704,46.6666684 C273.703704,46.6666684 270.37037,51.8518536 270.37037,58.51852 C270.37037,65.370372 273.703704,70.370372 278.703704,70.370372 C283.703704,70.370372 286.296296,65.7407424 286.296296,58.51852 Z M321.481482,53.8888904 L336.666667,53.8888904 C335.925926,48.7037052 333.148148,45.7407424 329.444444,45.7407424 C324.814815,45.5555572 322.407408,48.8888904 321.481482,53.8888904 Z" />
            <path d="M597.777776,116.851854 C596.48148,117.037039 595.185184,116.851854 594.074076,116.666668 C591.851852,116.481483 589.629628,116.296298 587.592592,115.925928 C584.074076,115.370372 580.74074,114.259261 577.407408,112.77778 C571.111112,109.814816 566.666668,106.111113 562.592592,100.555557 C559.074076,95.7407424 556.111112,91.296298 550.74074,91.296298 C549.25926,91.296298 546.48148,92.5925944 545.555556,92.9629644 C544.074076,91.8518536 543.333332,91.1111128 543.148148,90.1851868 C542.777776,88.8888904 544.25926,88.3333348 544.814816,88.1481496 C546.111112,87.4074092 547.592592,87.0370388 549.074076,86.6666684 C550,86.4814832 550.925924,86.1111128 551.851852,85.9259276 C553.148148,85.5555572 554.444444,85.1851868 555.74074,84.8148164 C556.666668,84.6296312 557.592592,84.2592608 558.703704,84.0740756 C547.222224,80.9259276 540.185184,70.5555572 540.185184,55.370372 C540.185184,28.7037053 561.851852,3.51852015 584.814816,3.51852015 C601.111112,3.51852015 611.111112,15.0000016 611.111112,33.333335 C611.111112,54.2592608 597.407408,75.370372 579.444444,82.5925944 C574.814816,84.444446 565.925924,86.4814832 562.037036,87.7777796 C572.222224,89.0740756 579.444444,96.1111128 582.962964,101.851854 C585.370372,105.555557 587.592592,109.444446 591.666668,111.481483 C592.777776,112.037039 593.703704,112.407409 595,112.592594 C595.925924,112.77778 597.407408,112.962964 598.888888,113.14815 C598.51852,113.88889 598.333332,115.925928 597.777776,116.851854 Z M551.851852,89.0740756 C558.333332,89.444446 561.666668,93.8888904 565.185184,98.7037052 C569.814816,105.000002 575.555556,111.481483 590.74074,113.333335 C585.74074,111.111113 582.777776,107.77778 580,103.333335 C575.370372,95.9259276 571.111112,89.0740756 557.777776,89.444446 L557.592592,87.5925944 C557.222224,87.7777796 556.851852,87.7777796 556.48148,87.7777796 C555.185184,88.1481496 553.888888,88.51852 552.592592,88.8888904 C552.407408,88.8888904 552.037036,89.0740756 551.851852,89.0740756 Z M573.703704,8.33333496 C557.037036,14.6296312 543.333332,34.2592609 543.333332,55.0000016 C543.333332,67.222224 547.962964,75.9259276 556.296296,79.6296312 C553.51852,77.222224 552.037036,73.51852 552.037036,68.51852 C552.037036,55.9259276 563.148148,23.5185202 567.407408,15.7407424 C569.444444,12.5925942 571.48148,10.0000016 573.703704,8.33333496 Z M594.814816,8.51852016 C597.592592,10.9259276 598.888888,14.4444461 598.888888,19.4444461 C598.888888,32.5925942 587.222224,65.1851868 583.333332,72.4074092 C581.48148,75.5555572 579.629628,77.9629644 577.222224,79.6296312 C577.407408,79.6296312 577.592592,79.444446 577.777776,79.444446 C594.814816,72.5925944 607.592592,52.7777796 607.592592,33.1481498 C607.777776,20.7407424 603.148148,12.2222238 594.814816,8.51852016 Z M584.629628,8.51852016 C577.777776,8.51852016 573.888888,10.9259276 570.370372,17.2222238 C566.48148,24.4444461 555.370372,56.6666684 555.370372,68.51852 C555.370372,76.1111128 558.703704,79.444446 566.48148,79.444446 C573.333332,79.444446 577.222224,77.0370388 580.74074,70.7407424 C584.814816,63.1481496 595.925924,31.2962979 595.925924,19.4444461 C595.74074,11.8518535 592.407408,8.51852016 584.629628,8.51852016 Z M774.444444,83.8888904 C771.111112,83.8888904 768.333332,82.5925944 766.48148,80.0000016 C764.074076,76.8518536 763.703704,72.222224 765.185184,67.0370388 L774.074076,39.2592609 L767.037036,39.2592609 L767.037036,37.5925942 C767.037036,37.5925942 768.333332,33.333335 769.444444,33.333335 L775.925924,33.333335 L780.555556,18.5185202 L796.48148,17.9629646 L791.48148,33.333335 L798.888888,33.333335 L798.888888,35.0000016 C798.888888,35.0000016 797.407408,39.2592609 796.48148,39.2592609 L789.629628,39.2592609 L778.51852,74.6296312 C778.333332,75.1851868 778.51852,75.7407424 778.51852,75.7407424 C778.51852,75.9259276 778.888888,75.9259276 779.074076,75.9259276 C781.48148,75.9259276 783.51852,74.8148164 786.296296,69.8148164 L787.037036,68.51852 L792.407408,70.5555572 L791.666668,72.0370388 C787.962964,79.8148164 781.851852,83.8888904 774.444444,83.8888904 Z M778.51852,36.1111128 L768.333332,67.9629644 C767.037036,72.0370388 767.407408,75.7407424 769.074076,78.1481496 C770.370372,79.8148164 772.222224,80.7407424 774.444444,80.7407424 C777.037036,80.7407424 779.629628,80.1851868 781.666668,78.8888904 C779.629628,79.444446 777.037036,79.444446 775.925924,77.7777796 C775.185184,76.6666684 775,75.370372 775.370372,73.7037052 L787.037036,36.4814831 L791.851852,21.2962979 L782.777776,21.6666683 L778.51852,36.1111128 Z M743.888888,83.8888904 C736.851852,83.8888904 733.148148,78.8888904 733.148148,73.8888904 C733.148148,69.2592608 735.185184,64.444446 737.222224,60.0000016 C739.25926,55.370372 741.296296,50.7407424 741.296296,46.1111128 C741.296296,43.3333348 740.370372,43.3333348 739.629628,43.3333348 C735.555556,43.3333348 732.037036,47.4074092 724.814816,60.7407424 L717.962964,82.9629644 L702.407408,82.9629644 L714.629628,44.2592608 C715,42.9629644 715,42.0370388 714.629628,41.6666684 C714.629628,41.6666684 714.444444,41.296298 713.888888,41.296298 C712.777776,41.296298 711.48148,41.6666684 709.444444,46.1111128 L708.888888,47.4074092 L703.333332,45.5555572 L704.074076,43.8888904 C707.037036,37.407409 712.777776,33.333335 719.074076,33.333335 C722.407408,33.333335 725.185184,34.6296312 727.037036,37.0370387 C727.962964,38.333335 728.888888,40.370372 729.074076,43.3333348 C734.074076,36.4814831 739.629628,33.333335 745.74074,33.333335 C752.407408,33.333335 756.48148,37.407409 756.48148,44.444446 C756.48148,51.4814832 753.148148,58.51852 750.555556,64.2592608 C748.888888,67.9629644 747.222224,71.296298 747.222224,73.3333348 C747.222224,75.9259276 748.333332,75.9259276 748.888888,75.9259276 C750.925924,75.9259276 752.962964,74.8148164 756.111112,69.8148164 L756.851852,68.7037052 L762.037036,70.9259276 L761.296296,72.4074092 C757.777776,79.444446 751.111112,83.8888904 743.888888,83.8888904 Z M739.814816,40.1851868 C742.037036,40.1851868 744.629628,41.296298 744.629628,46.296298 C744.629628,51.4814832 742.407408,56.4814832 740.185184,61.4814832 C738.148148,65.9259276 736.296296,70.1851868 736.296296,74.0740756 C736.296296,77.222224 738.703704,80.7407424 743.703704,80.7407424 C746.111112,80.7407424 748.333332,80.1851868 750.370372,79.0740756 C749.814816,79.2592608 749.25926,79.2592608 748.703704,79.2592608 C745.555556,79.2592608 743.888888,77.0370388 743.888888,73.51852 C743.888888,70.7407424 745.555556,67.222224 747.407408,63.1481496 C750,57.7777796 753.148148,51.1111128 753.148148,44.6296312 C753.148148,39.4444461 750.555556,36.8518535 745.555556,36.8518535 C742.777776,36.8518535 739.25926,37.5925942 734.814816,41.6666684 C736.666668,40.5555572 738.148148,40.1851868 739.814816,40.1851868 Z M706.851852,79.6296312 L715.74074,79.6296312 L722.037036,59.444446 C723.888888,56.1111128 725.555556,53.1481496 727.037036,50.7407424 L725,49.8148164 C726.48148,45.1851868 726.296296,41.296298 724.444444,38.8888905 C722.962964,36.8518535 720.74074,36.4814831 719.074076,36.4814831 C717.037036,36.4814831 715,37.0370387 713.333332,37.9629646 C714.814816,37.7777794 716.296296,38.333335 717.222224,39.6296312 C718.148148,40.9259276 718.333332,42.9629644 717.592592,45.1851868 L706.851852,79.6296312 Z M683.703704,83.8888904 C677.222224,83.8888904 672.962964,79.6296312 672.962964,73.1481496 C672.962964,67.4074092 675.74074,61.6666684 678.51852,55.9259276 C680.74074,51.296298 682.777776,46.8518536 682.777776,43.51852 C682.777776,41.296298 682.222224,41.296298 681.48148,41.296298 C680.74074,41.296298 678.333332,43.1481496 677.037036,46.1111128 L676.48148,47.4074092 L670.925924,45.5555572 L671.666668,43.8888904 C674.629628,37.2222238 680.555556,33.333335 687.592592,33.333335 C694.074076,33.333335 697.777776,38.5185202 697.777776,43.51852 C697.777776,49.8148164 694.444444,56.4814832 691.666668,62.4074092 C689.629628,66.6666684 687.592592,70.7407424 687.592592,73.51852 C687.592592,76.1111128 688.51852,76.1111128 689.25926,76.1111128 C691.666668,76.1111128 693.703704,75.0000016 696.48148,70.0000016 L697.222224,68.7037052 L702.407408,70.9259276 L701.666668,72.4074092 C697.962964,79.2592608 690.925924,83.8888904 683.703704,83.8888904 Z M681.48148,38.1481498 C684.444444,38.1481498 686.111112,40.0000016 686.111112,43.51852 C686.111112,47.5925944 683.888888,52.4074092 681.48148,57.4074092 C678.888888,62.7777796 676.296296,68.3333348 676.296296,73.3333348 C676.296296,77.9629644 679.074076,80.7407424 683.703704,80.7407424 C685.925924,80.7407424 688.148148,80.1851868 690.370372,79.0740756 L689.074076,79.0740756 C687.592592,79.0740756 684.25926,78.51852 684.25926,73.3333348 C684.25926,70.0000016 686.296296,65.7407424 688.703704,60.9259276 C691.48148,55.370372 694.444444,49.0740756 694.444444,43.51852 C694.444444,40.0000016 692.037036,36.6666683 687.592592,36.6666683 C685.370372,36.6666683 683.148148,37.2222238 681.296296,38.1481498 L681.48148,38.1481498 Z M652.222224,83.8888904 C648.51852,83.8888904 645.370372,82.4074092 643.333332,79.6296312 C642.407408,78.3333348 641.48148,76.4814832 641.296296,73.8888904 C636.296296,80.7407424 631.296296,83.7037052 625.370372,83.7037052 C618.51852,83.7037052 613.888888,79.2592608 613.888888,72.5925944 C613.888888,65.5555572 617.037036,58.1481496 619.629628,52.222224 C621.296296,48.3333348 622.777776,44.8148164 622.777776,42.7777796 C622.777776,41.296298 622.592592,41.1111128 622.592592,41.1111128 L622.037036,41.1111128 C621.111112,41.1111128 619.444444,42.5925944 617.777776,45.9259276 L617.222224,47.222224 L611.851852,45.370372 L612.592592,43.7037052 C615.555556,37.2222238 620.74074,33.333335 627.222224,33.333335 C633.51852,33.333335 637.407408,37.0370387 637.407408,43.1481496 C637.407408,47.7777796 635.370372,52.5925944 633.333332,57.0370388 C631.296296,61.6666684 629.25926,66.296298 629.25926,70.7407424 C629.25926,73.51852 630.185184,73.51852 630.925924,73.51852 C635,73.51852 638.333332,69.444446 645.74074,56.296298 L652.592592,34.0740757 L668.51852,33.7037053 L655.555556,74.6296312 C655.370372,75.370372 655.370372,75.5555572 655.370372,75.7407424 C655.370372,75.7407424 655.74074,75.9259276 656.666668,75.9259276 C658.888888,75.9259276 660.370372,75.0000016 663.333332,70.0000016 L663.888888,68.8888904 L669.444444,70.7407424 L668.51852,72.4074092 C664.814816,79.8148164 659.074076,83.8888904 652.222224,83.8888904 Z M643.703704,66.4814832 L645.74074,67.4074092 C644.25926,71.8518536 644.444444,75.370372 646.111112,77.7777796 C648.51852,81.1111128 654.629628,81.4814832 658.888888,78.8888904 C658.333332,79.0740756 657.592592,79.0740756 656.851852,79.0740756 C655,79.0740756 653.703704,78.51852 652.962964,77.4074092 C652.407408,76.6666684 652.037036,75.5555572 652.592592,73.51852 L664.074076,37.0370387 L655,37.5925942 L648.703704,57.9629644 C646.851852,61.296298 645.185184,64.0740756 643.703704,66.4814832 Z M622.592592,37.9629646 C625.185184,37.9629646 626.48148,39.6296312 626.48148,42.9629644 C626.48148,45.5555572 625,49.0740756 622.962964,53.7037052 C620.555556,59.444446 617.407408,66.4814832 617.407408,72.7777796 C617.407408,77.7777796 620.555556,80.7407424 625.555556,80.7407424 C628.51852,80.7407424 632.037036,80.0000016 636.111112,75.5555572 C634.444444,76.6666684 632.777776,77.222224 630.925924,77.222224 C629.074076,77.222224 625.925924,76.4814832 625.925924,71.1111128 C625.925924,65.9259276 628.148148,60.9259276 630.370372,55.9259276 C632.407408,51.4814832 634.25926,47.222224 634.25926,43.3333348 C634.25926,38.8888905 631.851852,36.6666683 627.407408,36.6666683 C625.555556,36.6666683 623.703704,37.0370387 622.037036,37.9629646 L622.592592,37.9629646 Z M693.148148,27.5925942 C688.703704,27.5925942 685,24.0740757 685,19.8148164 C685,15.1851868 688.51852,11.4814831 693.148148,11.4814831 C697.592592,11.4814831 700.925924,15.1851868 700.925924,19.8148164 C700.925924,24.0740757 697.407408,27.5925942 693.148148,27.5925942 Z M693.148148,14.8148164 C695.74074,14.8148164 697.777776,17.0370387 697.777776,19.8148164 C697.777776,22.407409 695.555556,24.4444461 693.148148,24.4444461 C690.370372,24.4444461 688.148148,22.407409 688.148148,19.8148164 C688.148148,16.8518535 690.370372,14.8148164 693.148148,14.8148164 Z M654.074076,74.0740756 C653.333332,76.296298 654.25926,77.4074092 656.851852,77.5925944 C660.185184,77.5925944 662.037036,75.7407424 664.814816,70.7407424 L667.222224,71.6666684 C663.333332,79.0740756 657.777776,82.4074092 652.222224,82.4074092 C646.296296,82.4074092 640.555556,77.7777796 644.074076,67.0370388 C636.851852,79.6296312 631.111112,82.4074092 625.555556,82.4074092 C619.814816,82.4074092 615.74074,78.8888904 615.74074,72.7777796 C615.74074,61.296298 624.814816,48.51852 624.814816,42.9629644 C624.814816,40.5555572 624.074076,39.6296312 622.407408,39.6296312 C620.555556,39.6296312 618.51852,41.6666684 616.666668,45.370372 L614.25926,44.444446 C617.037036,38.333335 621.851852,35.0000016 627.407408,35.0000016 C632.962964,35.0000016 635.925924,38.1481498 635.925924,43.3333348 C635.925924,52.0370388 627.592592,61.6666684 627.592592,71.1111128 C627.592592,73.7037052 628.333332,75.5555572 630.925924,75.5555572 C635.925924,75.5555572 640,70.370372 647.037036,57.4074092 L653.703704,35.9259276 L666.111112,35.370372 L654.074076,74.0740756 Z M687.592592,35.0000016 C692.962964,35.0000016 696.111112,39.2592609 695.925924,43.8888904 C695.925924,54.444446 685.74074,66.8518536 685.74074,73.7037052 C685.74074,76.1111128 686.48148,77.7777796 688.888888,77.7777796 C692.222224,77.7777796 694.629628,76.1111128 697.592592,70.9259276 L700,71.8518536 C697.037036,77.7777796 690.74074,82.4074092 683.888888,82.4074092 C677.962964,82.4074092 674.814816,78.51852 674.814816,73.3333348 C674.814816,63.3333348 684.629628,51.6666684 684.629628,43.7037052 C684.629628,40.5555572 683.51852,39.8148164 681.666668,39.8148164 C680.185184,39.8148164 677.222224,42.4074092 675.74074,45.5555572 L673.148148,44.6296312 C675.555556,39.0740757 680.74074,35.0000016 687.592592,35.0000016 Z M759.814816,71.6666684 C756.48148,78.51852 750,82.222224 743.51852,82.7777796 C737.777776,82.7777796 734.444444,78.8888904 734.444444,74.444446 C734.444444,65.7407424 742.592592,56.1111128 742.592592,46.6666684 C742.592592,44.0740756 742.037036,42.222224 739.444444,42.222224 C734.25926,42.222224 730.185184,47.4074092 723.148148,60.370372 L716.48148,81.6666684 L704.25926,81.6666684 L715.925924,45.0000016 C716.851852,42.0370388 715.74074,40.0000016 713.703704,40.0000016 C711.48148,40.0000016 709.814816,41.296298 707.777776,45.7407424 L705.370372,44.8148164 C707.962964,39.2592609 712.962964,35.1851868 719.074076,35.1851868 C725.185184,35.1851868 729.629628,40.1851868 726.48148,50.5555572 C733.703704,37.7777794 740.185184,35.1851868 745.74074,35.1851868 C751.48148,35.1851868 754.814816,38.5185202 754.814816,44.6296312 C754.814816,56.1111128 745.555556,67.7777796 745.555556,73.51852 C745.555556,75.9259276 746.48148,77.5925944 748.888888,77.5925944 C752.037036,77.5925944 754.444444,75.5555572 757.407408,70.7407424 L759.814816,71.6666684 Z M797.222224,35.0000016 C797.407408,35.0000016 796.851852,37.5925942 796.111112,37.7777794 L788.148148,37.7777794 L776.666668,74.2592608 C776.111112,76.1111128 776.851852,77.5925944 778.703704,77.5925944 C782.037036,77.5925944 784.444444,75.9259276 787.407408,70.7407424 L789.814816,71.6666684 C786.296296,78.7037052 780.925924,82.222224 774.25926,82.222224 C767.777776,82.222224 764.074076,76.1111128 766.666668,67.4074092 L776.111112,37.5925942 L768.51852,37.5925942 C768.333332,37.5925942 769.074076,34.8148164 769.444444,34.8148164 L777.037036,34.8148164 L781.666668,20.0000016 L794.074076,19.6296312 L789.25926,35.0000016 L797.222224,35.0000016 Z M609.25926,32.9629646 C609.25926,53.51852 595.74074,73.8888904 578.888888,80.5555572 C571.851852,83.51852 565.185184,85.9259276 557.962964,87.5925944 C584.444444,86.6666684 578.51852,112.962964 597.962964,112.962964 C598.148148,112.962964 598.148148,115.185187 597.962964,115.185187 C562.407408,115.185187 566.666668,90.5555572 551.296296,90.5555572 C548.51852,90.5555572 546.851852,92.222224 546.111112,92.222224 C545.555556,92.222224 544.814816,91.296298 544.814816,90.1851868 C544.814816,90.0000016 545.185184,89.8148164 545.185184,89.8148164 C545.370372,89.6296312 545.555556,89.6296312 545.925924,89.444446 C546.296296,89.2592608 546.851852,89.0740756 547.222224,88.8888904 C547.592592,88.7037052 548.148148,88.7037052 548.703704,88.51852 C550,88.1481496 551.48148,87.5925944 552.777776,87.222224 C554.25926,86.8518536 555.925924,86.296298 557.592592,85.9259276 C559.25926,85.370372 560.925924,85.0000016 562.592592,84.6296312 C563.888888,84.2592608 565.370372,83.8888904 566.851852,83.51852 C567.222224,83.3333348 567.592592,83.3333348 567.962964,83.1481496 C567.592592,83.1481496 566.666668,83.3333348 566.296296,83.3333348 C551.111112,83.3333348 541.666668,72.7777796 541.666668,55.1851868 C541.666668,29.8148164 562.222224,4.81481644 584.629628,4.81481644 C599.814816,4.81481644 609.25926,15.370372 609.25926,32.9629646 Z M597.407408,19.2592609 C597.407408,12.2222238 594.629628,7.03703868 584.629628,6.85185348 C576.851852,6.85185348 572.592592,10.0000016 568.888888,16.4814831 C564.814816,23.8888905 553.703704,56.1111128 553.703704,68.51852 C553.703704,75.7407424 556.48148,80.9259276 566.296296,80.9259276 C574.074076,80.9259276 578.51852,77.7777796 582.037036,71.296298 C586.111112,63.8888904 597.407408,31.8518535 597.407408,19.2592609 Z" />
            <polygon points="768.333332 32.407409 766.296296 39.6296312 797.592592 39.6296312 800 32.407409" />
          </g>
        </g>
      </g>
    </svg>
  )
}
