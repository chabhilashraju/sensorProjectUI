import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ChartService } from '../../shared/chart-service.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private chartServiceApi: ChartService) { }
  requestJson: any;
  lineChartDataValue: any;
  stringval: any;
  lineChartDataValueTemp: any;
subStationDevices: any;
  subStaionList = {
    subStation: [{

      name: 'SMC',
      val: 'smc'

    }, {

      name: 'ATC',
      val: 'atc'

    }, {

      name: 'Narayanagiri',
      val: 'narayanagiri'

    }, {

      name: 'SV Museum',
      val: 'svmuseum'

    }, {

      name: 'Vaikuntam2',
      val: 'vaikuntam2'

    }, {

      name: 'Sevasadan',
      val: 'sevasadan'

    }, {

      name: 'DPW',
      val: 'dpw'

    }, {

      name: 'Rbgh rambagicha',
      val: 'rbghrambagicha'

    }, {

      name: 'Varahaswamy vsgh',
      val: 'varahaswamyvsgh'

    }, {

      name: '33/11kv substation',
      val: 'kvsubstation'

    }, {

      name: 'ANC',
      val: 'anc'

    }, {

      name: 'GNC',
      val: 'gnc'

    }, {

      name: 'HVC',
      val: 'hvc'

    }, {

      name: 'CRO',
      val: 'cro'

    }, {

      name: 'FILTER HOUSE',
      val: 'filterhouse'

    }, {

      name: 'Sujalan Windmill',
      val: 'sujalanwindmill'

    }, {

      name: 'Akasa Ganga',
      val: 'akasaganga'

    }, {

      name: 'Papanasam',
      val: 'papanasam'

    }, {

      name: 'GG DAM',
      val: 'ggdam'

    }, {

      name: 'Pandava Theertham',
      val: 'pandavatheertham'

    }, {

      name: 'Dtype',
      val: 'dtype'

    }, {

      name: 'Kpdam',
      val: 'kpdam'

    }, {

      name: 'Dharmagiri',
      val: 'dharmagiri'

    }, {

      name: 'Indoor substation',
      val: 'indoorsubstation'

    }, {

      name: '3mld plant',
      val: 'mld3plant'

    }, {

      name: 'Balaji Nagar2',
      val: 'balajinagar2'

    }, {

      name: 'Balaji Nagar1',
      val: 'balajinagar1'

    }, {

      name: '5mld plant',
      val: 'mld5plant'

    }, {

      name: 'SPT',
      val: 'spt'

    }, {

      name: 'BSM',
      val: 'bsm'

    }, {

      name: 'PPC',
      val: 'ppc'

    }, {

      name: 'VQC 1',
      val: 'vqc1'

    }, {

      name: 'Murthynayanicheruvu',
      val: 'murthynayanicheruvu'

    }, {

      name: 'Vijayamalya Guest House',
      val: 'vijayamalyaguesthouse'

    }, {

      name: '7th Mail',
      val: 'th7mail'

    }, {

      name: 'Japalitheertham',
      val: 'japalitheertham'

    }

    ]


  };

  subStationDeviceList = {
    smc:
      [
        {
          name: 'SMC - 01 - Generator',
          val: 'smc01'
        },
        {
          name: 'SMC - 02 - Transformer',
          val: 'smc02'
        },
        {
          name: 'SMC - 03 - Transformer',
          val: 'smc03'
        },
        {
          name: 'SMC - 04 - Generator',
          val: 'smc04'
        }
      ],
    atc:
      [
        {
          name: 'ATC - 01 - Generator',
          val: 'atc01'
        },
        {
          name: 'ATC - 02 - Generator',
          val: 'atc02'
        },
        {
          name: 'ATC - 03 - Transformer',
          val: 'atc03'
        }
      ],
    narayanagiri: [
      {
        name: 'NARGIRI - 01 - Transformer',
        val: 'nargiri01'
      },
      {
        name: 'NARGIRI - 02 - Transformer',
        val: 'nargiri02'
      },
      {
        name: 'NARGIRI - 03 - Transformer',
        val: 'nargiri03'
      }
    ],
    svmuseum: [
      {
        name: 'SVM - 01 - Generator',
        val: 'svm01'
      }, {
        name: 'SVM - 02 - Transformer',
        val: 'svm02'
      }, {
        name: 'SVM - 03 - Generator',
        val: 'svm03'
      }, {
        name: 'SVM - 04 - Transformer',
        val: 'svm04'
      }, {
        name: 'SVM - 05 - Transformer',
        val: 'svm05'
      }],
    vaikuntam2: [{
      name: 'VKM - 01 - Transformer',
      val: 'vkm01'
    }, {
      name: 'VKM - 02 - Transformer',
      val: 'vkm02'
    }, {
      name: 'VKM - 03 - Transformer',
      val: 'vkm03'
    }, {
      name: 'VKM - 04 - Transformer',
      val: 'vkm04'
    }, {
      name: 'VKM - 05 - Transformer',
      val: 'vkm05'
    }, {
      name: 'VKM - 06 - Transformer',
      val: 'vkm06'
    }],
    sevasadan: [{
      name: 'SVSD - 01 - Generator',
      val: 'svsd01'
    }, {
      name: 'SVSD - 02 - Transformer',
      val: 'svsd02'
    }, {
      name: 'SVSD - 03 - Generator',
      val: 'svsd03'
    }, {
      name: 'SVSD - 04 - Transformer',
      val: 'svsd04'
    }], dpw: [{
      name: 'DPW - 01 - Transformer',
      val: 'dpw01'
    }],

    rbghrambagicha: [{
      name: 'RBGH - 01 - Transformer',
      val: 'rbgh01'
    }, {
      name: 'RBGH - 02 - Transformer',
      val: 'rbgh02'
    }, {
      name: 'RBGH - 03 - Transformer',
      val: 'rbgh03'
    }, {
      name: 'RBGH - 04 - Transformer',
      val: 'rbgh04'
    }, {
      name: 'RBGH - 05 - Transformer',
      val: 'rbgh05'
    }, {
      name: 'RBGH - 06 - Transformer',
      val: 'rbgh06'
    }, {
      name: 'RBGH - 01 - Transformer',
      val: 'rbgh01'
    }, {
      name: 'RBGH - 07 - Transformer',
      val: 'rbgh07'
    }],
    varahaswamyvsgh: [{
      name: 'VSGH - 01 - Generator',
      val: 'vsgh01'
    }, {
      name: 'VSGH - 02 - Transformer',
      val: 'vsgh02'
    }, {
      name: 'VSGH - 03 - Transformer',
      val: 'vsgh03'
    }, {
      name: 'VSGH - 04 - Transformer',
      val: 'vsgh03'
    }],
    kvsubstation: [{
      name: '33kv - 01 - Transformer',
      val: '33kv01'
    }, {
      name: '33kv - 02 - Transformer',
      val: '33kv02'
    }, {
      name: '33kv - 03 - Transformer',
      val: '33kv03'
    }, {
      name: '33kv - 04 - Transformer',
      val: '33kv04'
    }, {
      name: '33kv - 05 - Transformer',
      val: '33kv05'
    }, {
      name: '33kv - 06 - Transformer',
      val: '33kv06'
    }, {
      name: '33kv - 07 - Transformer',
      val: '33kv07'
    }],
    anc: [{
      name: 'ANC - 01 - Generator',
      val: 'anc01'
    }, {
      name: 'ANC - 02 - Transformer',
      val: 'anc02'
    }, {
      name: 'ANC - 03 - Generator',
      val: 'anc03'
    }, {
      name: 'ANC - 04 - Transformer',
      val: 'anc04'
    }, {
      name: 'ANC - 05 - Transformer',
      val: 'anc05'
    }],
    gnc: [{
      name: 'GNC - 01 - Transformer',
      val: 'gnc01'
    }, {
      name: 'GNC - 02 - Generator',
      val: 'gnc02'
    }],
    hvc: [{
      name: 'HVC',
      val: 'hvc01'
    }],
    cro: [{
      name: 'CRO',
      val: 'cro'
    }],
    filterhouse: [{
      name: 'FILTER HOUSE',
      val: 'filterhouse'
    }],
    sujalanwindmill: [{
      name: 'Sujalan Wind mill',
      val: 'sujalanwindmill'
    }],
    akasaganga: [{
      name: 'Akasa Ganga Pump - 01',
      val: 'akgpump01'
    }, {
      name: 'Akasa Ganga Pump - 02',
      val: 'akgpump02'
    }],
    papanasam: [{
      name: 'Papanasam - 01 - Transformer',
      val: 'pnsm01'
    }],
    ggdam: [{
      name: 'GG DAM - 01 - Transformer',
      val: 'ggdam01'
    }],
    pandavatheertham: [{
      name: 'Pandavatheertham',
      val: 'pandavatheertham'
    }],
    dtype: [{
      name: 'Dtype - 01 - Transformer',
      val: 'dtype01'
    }],
    kpdam: [{
      name: 'KPDAM - 01 - Transformer',
      val: 'kpdam01'
    }, {
      name: 'KPDAM - 02 - Transformer',
      val: 'kpdam02'
    }],
    dharmagiri: [{
      name: 'Dharmagiri - 01 - Generator',
      val: 'dgiri01'
    }, {
      name: 'Dharmagiri - 02 - Transformer',
      val: 'dgiri02'
    }, {
      name: 'Dharmagiri - 03 - Transformer',
      val: 'dgiri03'
    }],
    indoorsubstation: [{
      name: 'INDSS - 01 - Generator',
      val: 'indss01'
    }, {
      name: 'INDSS - 02 - Generator',
      val: 'indss02'
    }],
    mld3plant: [{
      name: '3mld plant - 01 - Transformer',
      val: '3mld01'
    }],
    balajinagar1: [{
      name: 'Balaji nagar1 - 01 - Transformer',
      val: 'balaji1n01'
    }],
    balajinagar2: [{
      name: 'Balaji nagar2 - 01 - Transformer',
      val: 'balaji2n01'
    }],
    mld5plant: [{
      name: '5mld plant - 01 - Transformer',
      val: '5mld01'
    }],
    spt: [{
      name: 'SPT - 01 - Transformer',
      val: 'spt01'
    }],
    bsm: [{
      name: 'BSM - 01 - Generator',
      val: 'bsm01'
    }, {
      name: 'BSM - 02 - Transformer',
      val: 'bsm02'
    }, {
      name: 'BSM - 03 - Transformer',
      val: 'bsm03'
    }, {
      name: 'BSM - 04 - Transformer',
      val: 'bsm04'
    }],
    vqc1: [{
      name: 'VQC',
      val: 'vqc01'
    }],
    ppc: [{
      name: 'PPC - 01 - Generator',
      val: 'ppc01'
    },
    {
      name: 'PPC - 02 - Generator',
      val: 'ppc02'
    }, {
      name: 'PPC - 03 - Transformer',
      val: 'ppc03'
    }, {
      name: 'PPC - 04 - Transformer',
      val: 'ppc04'
    }, {
      name: 'PPC - 05 - Transformer',
      val: 'ppc05'
    }],
    murthynayanicheruvu: [{
      name: 'murthynayanicheruvu',
      val: 'murthynayanicheruvu'
    }],
    vijayamalyaguesthouse: [{
      name: 'vijayamalya guest house',
      val: 'vijayamalyaguesthouse'
    }],

    th7mail: [{
      name: '7th Mail',
      val: '7thmail'
    }],

    japalitheertham: [{
      name: 'japalitheertham',
      val: 'japalitheertham'
    }]

  };

  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];
  public lineChartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  // tslint:disable-next-line: max-line-length
  public barChartLabels: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];


  // tslint:disable-next-line: no-inferrable-types
  radioModel: string = 'Month';

  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    {
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Device X0390838'
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // mainChart

  public mainChartElements = 27;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value: any) {
            return value;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5
          // stepSize: Math.ceil(250 / 5),
          // max: 250
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  // social box charts

  public brandBoxChartData1: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Facebook'
    }
  ];
  public brandBoxChartData2: Array<any> = [
    {
      data: [1, 13, 9, 17, 34, 41, 38],
      label: 'Twitter'
    }
  ];
  public brandBoxChartData3: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'LinkedIn'
    }
  ];
  public brandBoxChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Google+'
    }
  ];

  public brandBoxChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public brandBoxChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public brandBoxChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public brandBoxChartLegend = false;
  public brandBoxChartType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(50, 200));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(65);
    }
  }

  onSubmit(formData) {

    console.log(formData);
    this.requestJson = {
      'timestamp': formData.dateId,
      'deviceName': formData.deviceId
    };


    this.chartServiceApi.getDetails(this.requestJson).subscribe(val => {

      console.log(val);
      this.lineChartData = val.current;
      this.barChartData = val.powerFactor;
      this.mainChartData = val.voltage;
    });


  }
    onChange(deviceValue) {
    console.log(deviceValue);

    this.subStationDevices = this.subStationDeviceList[deviceValue];

  }
  

}
