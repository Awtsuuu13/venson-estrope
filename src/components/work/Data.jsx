import ArcusLogin from '../../assets/arcus-login.png'
import NexusLogin from '../../assets/nexus-login.png'

import GoCtpl from '../../assets/goctpl.png'
import Ecgl from '../../assets/ecgl.png'
import WWMS from '../../assets/wwms.png'

import OfwLogin from '../../assets/ofw/ofw-login.png'
import coi from '../../assets/ofw/coi.png'
import Detailedreport from '../../assets/ofw/Detailedreport.png'
import exchangerate from '../../assets/ofw/exchangerate.png'
import newtransaction from '../../assets/ofw/newtransaction.png'
import payment from '../../assets/ofw/payment.png'
import reprint from '../../assets/ofw/reprint.png'
import statementofaccount from '../../assets/ofw/statementofaccount.png'
import updatetransaction from '../../assets/ofw/updatetransaction.png'

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

import ImsLogin from '../../assets/ims-login.png'
import one from '../../assets/ims/1.png'
import two from '../../assets/ims/2.png'
import three from '../../assets/ims/3.png'
import four from '../../assets/ims/4.png'
import five from '../../assets/ims/5.png'
import six from '../../assets/ims/6.png'
import seven from '../../assets/ims/7.png'
import eight from '../../assets/ims/8.png'
import nine from '../../assets/ims/9.png'


import Slsu from '../../assets/slsu-login.png'
import add from '../../assets/slsu/add.png'
import chairman from '../../assets/slsu/chairman.png'
import Enrolled from '../../assets/slsu/Enrolled.png'
import Gwa from '../../assets/slsu/Gwa.png'
import Login from '../../assets/slsu/Login.png'
import Register from '../../assets/slsu/Register.png'
import Register1 from '../../assets/slsu/Register1.png'
import Register2 from '../../assets/slsu/Register2.png'
import restore from '../../assets/slsu/restore.png'
import Section from '../../assets/slsu/Section.png'
import Student_admin from '../../assets/slsu/Student_admin.png'
import Student_grade from '../../assets/slsu/Student_grade.png'
import Subject from '../../assets/slsu/Subject.png'
import Update_details from '../../assets/slsu/Update_details.png'
import User from '../../assets/slsu/User.png'


export const projectsData = [
    {
      id: 1,
      image: OfwLogin,
      title: "OFW Insurance System",
      category: "app",
      link: null,
      additionalImages: [
        OfwLogin,
        coi,
        Detailedreport,
        exchangerate,
        newtransaction,
        payment,
        reprint,
        statementofaccount,
        updatetransaction,
      ]
    },
    // {
    //   id: 2,
    //   image: ArcusLogin,
    //   title: "Arcus - Claims System",
    //   category: "app",
    //   link: "app",
    //   additionalImages: [
    //     ArcusLogin
    //   ]
    // },
    {
      id: 3,
      image: NexusLogin,
      title: "Nexus - Bonds Insurance System",
      category: "app",
      link: null,
      additionalImages: [
        NexusLogin
      ]
    },
    {
      id: 4,
      image: GoCtpl,
      title: "GoCTPL - Motorcar Insurance System",
      category: "app",
      link: "https://goctpl.com/",
      additionalImages: [
        GoCtpl
      ]
    },
    {
      id: 5,
      image: Ecgl,
      title: "ECGL - Manila CGL Insurance System",
      category: "app",
      link: "https://www.cglis.com.ph/cglismanila",
      additionalImages: [
        Ecgl
      ]
    },
    {
      id: 6,
      image: WWMS,
      title: "WMS - Warehouse Management System",
      category: "app",
      link: null,
      additionalImages: [
        WWMS
      ]
    },
    {
      id: 7,
      image: ImsLogin,
      title: "IMS - Order Tracking System",
      category: "app",
      link: null,
      additionalImages: [
        ImsLogin,
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine
      ]
    },
    {
      id: 8,
      image: Scanmar,
      title: "Scanmar - Maritime Payroll System",
      category: "app",
      link: null,
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
      link: null,
      additionalImages: [
        Slsu,
        add,
        chairman,
        Enrolled,
        Gwa,
        Register,
        Register1,
        Register2,
        restore,
        Section,
        Student_admin,
        Student_grade,
        Subject,
        Update_details,
        User
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
  