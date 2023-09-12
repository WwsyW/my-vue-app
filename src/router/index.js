/// 1. Define route components.
// These can be imported from other files
import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Hello from '../components/HelloWorld.vue'
import Login from '../components/Login.vue'
import StudentList from '../components/StudentList.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: () => import("../components/Login.vue")},
  { path: '/home', component: () => import("../components/Home.vue"),
   children:[
     //{ path: '/studentList', component:StudentList },
     { path: '/openins',meta:{title:"开立检查",power:"outpatient"}, component: () => import("../view/Outpatient/OpeningInspection/Openinginspection.vue")},
     { path: '/paticall',meta:{title:"患者叫号",power:"outpatient"},  component: () => import("../view/Outpatient/PatientCall/PatientCall.vue")},
     { path: '/parimdia',meta:{title:"初步诊断",power:"outpatient"},  component: () => import("../view/Outpatient/PrimaryDiagnosis/PrimaryDiagnosis.vue")},

    { path: '/enterins',meta:{title:"录入检验结果",power:"laboratory"}, component: () => import("../view/Laboratory/EnterInspectionResults/EnterInspectionResults.vue")},
    { path: '/labpaticall', meta:{title:"患者叫号",power:"laboratory"},component: () => import("../view/Laboratory/PatientCall/PatientCall.vue")},
    { path: '/perfins', meta:{title:"执行检验",power:"laboratory"},component: () => import("../view/Laboratory/PerformInspection/PerformInspection.vue")},
  ]},
  
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router
