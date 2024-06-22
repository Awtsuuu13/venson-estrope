import ArcusLogin from '../../assets/arcus-login.png'
import NexusLogin from '../../assets/nexus-login.png'
import ImsLogin from '../../assets/ims-login.png'

import OfwLogin from '../../assets/ofw-login.png'
import GoCtpl from '../../assets/goctpl.png'
import Ecgl from '../../assets/ecgl.png'
import WWMS from '../../assets/wwms.png'
import Slsu from '../../assets/slsu-login.png'

import Scanmar from '../../assets/scanmar/scanmar.png'
import bankdownloading from '../../assets/scanmar/bankdownloading.png'
import varioustable from '../../assets/scanmar/varioustable.png'
import payrollprocess from '../../assets/scanmar/payrollprocess.png'
import vesselpayslip from '../../assets/scanmar/vesselpayslip.png'
import vesselparameter from '../../assets/scanmar/vesselparameter.png'
import vesselparam from '../../assets/scanmar/vesselparam.png'
import crewwages from '../../assets/scanmar/crewwages.png'
import accessroles from '../../assets/scanmar/accessroles.png'
import accesssetup from '../../assets/scanmar/accesssetup.png'


export const projectsData = [
    {
      id: 1,
      image: OfwLogin,
      title: "OFW Insurance System",
      category: "app",
      link: "app",
      additionalImages: [
        OfwLogin
      ]
    },
    {
      id: 2,
      image: ArcusLogin,
      title: "Arcus - Claims System",
      category: "app",
      link: "app",
      additionalImages: [
        ArcusLogin
      ]
    },
    {
      id: 3,
      image: NexusLogin,
      title: "Nexus - Bonds Insurance System",
      category: "app",
      link: "app",
      additionalImages: [
        NexusLogin
      ]
    },
    {
      id: 4,
      image: GoCtpl,
      title: "GoCTPL - Motorcar Insurance System",
      category: "app",
      link: "app",
      additionalImages: [
        GoCtpl
      ]
    },
    {
      id: 5,
      image: Ecgl,
      title: "ECGL - Manila CGL Insurance System",
      category: "app",
      link: "app",
      additionalImages: [
        Ecgl
      ]
    },
    {
      id: 6,
      image: WWMS,
      title: "WMS - Warehouse Management System",
      category: "app",
      link: "app",
      additionalImages: [
        WWMS
      ]
    },
    {
      id: 7,
      image: ImsLogin,
      title: "IMS - Order Tracking System",
      category: "app",
      link: "app",
      additionalImages: [
        ImsLogin
      ]
    },
    {
      id: 8,
      image: Scanmar,
      title: "Scanmar - Maritime Payroll System",
      category: "app",
      link: "app",
      additionalImages: [
        Scanmar,
        bankdownloading,
        varioustable,
        vesselparameter,
        vesselparam,
        vesselpayslip,
        payrollprocess,
        crewwages,
        accessroles,
        accesssetup
      ]
    },
    {
      id: 9,
      image: Slsu,
      title: "SLSU Graduating Application System",
      category: "app",
      link: "app",
      additionalImages: [
        Slsu
      ]
    },
    
  ];

  export const projectsNav = [
    {
      name: "all"
    },
    {
      name: "app"
    },
    {
      name: "web"
    }
  ]
  