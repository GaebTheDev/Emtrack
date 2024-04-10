import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pieData: any;
  pieOptions: any;
  lineData: any;
  lineOptions: any;
  barData: any;
  barOptions: any;
  doughnutData: any;
  doughnutOptions: any;
  radarData: any;
  radarOptions: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.pieData = {
      labels: ['Males', 'Females'],
      datasets: [
        {
          data: [540, 325],
          backgroundColor: [documentStyle.getPropertyValue('--teal-800'), documentStyle.getPropertyValue('--teal-400')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--teal-700'), documentStyle.getPropertyValue('--teal-300'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.pieOptions = {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        },
        title: {
          display: true,
          text: 'Male to Female ratio',
          color: documentStyle.getPropertyValue('--teal-700'),
          font: {
            size: 24
          }
        }
      },

    };

    this.lineData = {
      labels: ['January 2024', 'February 2024', 'March 2024', 'April 2024'],
      datasets: [
        {
          label: 'Number of tasks finished',
          data: [65, 59, 80, 81],
          borderColor: documentStyle.getPropertyValue('--teal-700'),
          tension: 0.4
        }
      ]
    };

    this.lineOptions = {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        },
        title: {
          display: true,
          text: 'Tasks finished per month',
          color: documentStyle.getPropertyValue('--teal-700'),
          font: {
            size: 24
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }

    };
    this.barData = {
      labels: ['January 2024', 'February 2024', 'March 2024', 'April 2024'],
      datasets: [
        {
          label: 'New Hires',
          data: [12, 6, 27, 19],
          backgroundColor: [documentStyle.getPropertyValue('--teal-400')]
        },
        {
          label: 'Laid Off Employees',
          data: [2, 3, 0, 4],
          backgroundColor: [documentStyle.getPropertyValue('--red-400')]
        }
      ]
    };

    this.barOptions = {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        },
        title: {
          display: true,
          text: 'Employee Equilibrium',
          color: documentStyle.getPropertyValue('--teal-700'),
          font: {
            size: 24
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

    this.doughnutData = {
      labels: ['Canceled', 'Ongoing', 'Completed'],
      datasets: [
        {
          data: [2, 7, 3],
          backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--teal-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--teal-400')]
        }
      ]
    };


    this.doughnutOptions = {
      maintainAspectRatio: false,
      aspectRatio: 1,
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        },
        title: {
          display: true,
          text: 'Project Status',
          color: documentStyle.getPropertyValue('--teal-700'),
          font: {
            size: 24
          }
        }
      }
    };

    this.radarData = {
      labels: ['Stability', 'Market Leadership', 'Efficiency', 'Reliability', 'Scalability', 'Employee Retention'],
      datasets: [
        {
          label: ['score'],
          borderColor: documentStyle.getPropertyValue('--teal-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--teal-400'),
          pointBorderColor: documentStyle.getPropertyValue('--teal-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--teal-400'),
          data: [65, 59, 90, 81, 56, 55]
        },
      ]
    };

    this.radarOptions = {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          display:false,
          labels: {
            color: textColor
          }
        },
        title: {
          display: true,
          text: 'Overall Assessment',
          color: documentStyle.getPropertyValue('--teal-700'),
          font: {
            size: 24
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary
          },
          pointLabels: {
            color: textColorSecondary
          },
          ticks: {
            display: false
          },
          beginAtZero: true,
          min: 0,
          max: 100
        }
      }
    };

  }
}
