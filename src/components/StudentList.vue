<template>
    <!-- Student page! -->
    <el-card class="box-card">
        <template #header>
        <div class="card-header">
            <span>查看所有学生信息</span>
            <el-button class="button" text @click="showForm">添加</el-button>
                <!--添加学生信息表单-->
                <el-dialog v-model="dialogFormVisible" title="添加学生信息">
                    <el-form :model="form">
                        <el-form-item label="姓名" :label-width="formLabelWidth">
                            <el-input v-model="form.stu_name" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="密码" :label-width="formLabelWidth">
                            <el-input v-model="form.password" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="性别" :label-width="formLabelWidth">
                            <el-radio-group v-model="form.stu_sex">
                            <el-radio v-model.number="form.stu_sex"   label="1">男</el-radio>
                            <el-radio v-model.number="form.stu_sex"   label="0">女</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="出生日期" :label-width="formLabelWidth">
                                    <el-input type="date" v-model="form.stu_birthday" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="兴趣爱好" :label-width="formLabelWidth">
                            <el-checkbox-group v-model="form.stu_interest">
                                        <el-checkbox label="电影" key="电影"> </el-checkbox>
                                        <el-checkbox label="篮球" key="篮球"> </el-checkbox>
                                        <el-checkbox label="看书" key="看书"> </el-checkbox>
                                        <el-checkbox label="足球" key="足球"> </el-checkbox>
                                        <el-checkbox label="游戏" key="游戏"> </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                        <el-form-item label="学历" :label-width="formLabelWidth">
                            <el-select v-model="form.stu_education" placeholder="---请选择你的学历---"> 
                                        <el-option label="大专" value="大专" />
                                        <el-option  label="本科" value="本科" />
                                        <el-option label="硕士" value="硕士" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="幸运色" :label-width="formLabelWidth">
                                    <el-input type="color" v-model="form.my_color" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="幸运数字" :label-width="formLabelWidth">
                                    <el-input type="number" v-model="form.lucky_number" autocomplete="off" />
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="dialogFormVisible = false"> 取消</el-button>
                            <el-button type="primary" @click="addStudent">
                            添加
                            </el-button>
                        </span>
                    </template>
                </el-dialog>
                <!--查询学生信息表格-->
                <el-form :inline="true" :model="queryfrm" class="demo-form-inline">
                 <!-- <el-form-item label="选择班级">
                    <el-select v-model="queryfrm.clsid" placeholder="选择班级">
                        <el-option label="--选择班级--" value="0"> </el-option>
                        <el-option v-for="cls in classInfoData" :key="cls.clsid" :label="cls.className" :value="cls.clsid"></el-option>
                    </el-select>
                </el-form-item> -->
                <el-form-item label="姓名">
                    <el-input v-model="queryfrm.name" placeholder="输入姓名"></el-input>
                </el-form-item>
               
                <el-form-item>
                    <el-button type="primary" @click="btnQuery">查询</el-button>
                </el-form-item>
            </el-form>
                <!--修改学生信息表单-->
                <el-dialog v-model="dialogModifVisible" title="修改学生信息">
                    <el-form :model="formModif">
                        <el-form-item label="姓名" :label-width="formLabelWidth">
                            <el-input v-model="formModif.stu_name" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="密码" :label-width="formLabelWidth">
                            <el-input v-model="formModif.password" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="性别" :label-width="formLabelWidth">
                            <el-radio-group v-model="formModif.stu_sex">
                            <el-radio v-model.number="formModif.stu_sex"   label="1">男</el-radio>
                            <el-radio v-model.number="formModif.stu_sex"   label="0">女</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="出生日期" :label-width="formLabelWidth">
                                    <el-input type="date" v-model="formModif.stu_birthday" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="兴趣爱好" :label-width="formLabelWidth">
                            <el-checkbox-group v-model="formModif.stu_interest">
                                        <el-checkbox label="电影" key="电影"> </el-checkbox>
                                        <el-checkbox label="篮球" key="篮球"> </el-checkbox>
                                        <el-checkbox label="看书" key="看书"> </el-checkbox>
                                        <el-checkbox label="足球" key="足球"> </el-checkbox>
                                        <el-checkbox label="游戏" key="游戏"> </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                        <el-form-item label="学历" :label-width="formLabelWidth">
                            <el-select v-model="formModif.stu_education" placeholder="---请选择你的学历---"> 
                                        <el-option label="大专" value="大专" />
                                        <el-option  label="本科" value="本科" />
                                        <el-option label="硕士" value="硕士" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="幸运色" :label-width="formLabelWidth">
                                    <el-input type="color" v-model="formModif.my_color" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="幸运数字" :label-width="formLabelWidth">
                                    <el-input type="number" v-model="formModif.lucky_number" autocomplete="off" />
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="dialogModifVisible = false"> 取消</el-button>
                            <el-button type="primary" @click="updateStudent">
                            修改
                            </el-button>
                        </span>
                    </template>
                </el-dialog>

        </div>
        </template>
        <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="stu_name" label="姓名" width="150" />
    <el-table-column prop="stu_sex" label="性别" width="120" />
    <el-table-column prop="password" label="密码" width="120" />
    <el-table-column prop="slucky_number" label="幸运数字" width="120" />
    <el-table-column prop="stu_education" label="学历" width="600" />
    <el-table-column prop="stu_interest" label="兴趣爱好" width="600" />
    
    <el-table-column fixed="right" label="Operations" width="120">
    
      <template #default="scope">
        <el-button link type="primary" size="small" @click="handleClick"
          >Detail</el-button>
        

        <el-button link type="primary" size="small" @click="openUpdateDialog(scope.row)">Edit</el-button>
        
            <el-popconfirm>
        <confirm-button-text="Yes"
        cancel-button-text="No"
        :icon="InfoFilled"
        icon-color="#626AEF"
        title="Are you sure to delete this?"
        @confirm="confirmEvent(scope.row.stuid)"/>
        <template #reference>
        <el-button link type="primary" size="small">Delete</el-button>
        </template>
    </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
    </el-card>
</template>


<script>
    //import axios from 'axios'
    import { ElMessage } from 'element-plus'
    import { reactive, ref } from 'vue'
    export default {
        data(){
            return{
                queryfrm:{
                    name:" "
                },
                dialogFormVisible:false,//添加
                dialogModifVisible:false,//修改
                form:reactive({
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    }),
                tableData: []
             }             
         },
        methods:{
            btnQuery(){
                this.LoadAllStudent()
            },
            //显示添加表单
            showForm(){
                this.btnName="添加"
                this.title="添加学生信息"
                this.dialogFormVisible = true
            },
            //添加学生信息
            addStudent(){
                this.form.stu_interest = this.form.stu_interest.join(',')
                this.form.stu_sex = Number(this.form.stu_sex)
                this.form.lucky_number = Number(this.form.lucky_number)
                console.log(this.form);
                this.$http.post("http://localhost:8080/stu/add",this.form).then((res)=>{
                    if(res.data==1){
                        console.log("添加成功！");
                        ElMessage({
                            message: '添加成功！',
                            type: 'success',
                        })
                        this.form={}
                        this.dialogFormVisible=false
                        this.LoadAllStudent()
                    }else{
                        console.log("添加失败！");
                        ElMessage.error('添加失败！')
                    }
                }).catch((err)=>{

                    })
            },
            //删除学生信息
            confirmEvent(stuid){
                //console.log("delete...." +stuid);
                this.$http.delete("http://localhost:8080/stu/del/"+stuid).then((res)=>{
                    if(res.data==1){
                        console.log("删除成功");
                         ElMessage({
                         message: '删除成功',
                         type: 'success',
                           })
                           this.LoadAllStudent()
                    }else{
                        console.log("删除失败");
                        ElMessage.error("删除失败")
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            },
            //打开修改表单
            openUpdateDialog(row){
                this.btnName="修改"
                this.title="修改学生信息"
                this.dialogModifVisible = true
                this.formModif=row
                this.formModif.stu_interest=this.formModif.stu_interest.split(',')
                this.formModif.stu_sex=this.formModif.stu_sex.toString()
                console.log("openUpdateDialog....");
            },
            //修改学生信息
            updateStudent() {
                console.log(this.formModif);
                this.formModif.stu_interest = this.formModif.stu_interest.join(',')
                this.formModif.stu_sex = Number(this.formModif.stu_sex)
                this.formModif.lucky_number = Number(this.formModif.lucky_number)
                console.log(this.formModif);
                this.$http.put("http://localhost:8080/stu/update",this.formModif).then((res)=>{
                    if(res.data==1){
                        console.log("修改成功！");
                        ElMessage({
                            message: '修改成功！',
                            type: 'success',
                        })
                        this.formModif={}
                        this.dialogModifVisible=false
                        this.LoadAllStudent()
                    }else{
                        console.log("修改失败！");
                        ElMessage.error('修改失败！')
                    }
                }).catch((err)=>{

                    })
            },
            // 加载所有学生信息
            LoadAllStudent(){
                    this.$http.get('http://localhost:8080/stu/list?str='+this.queryfrm.name)
                    .then( (response)=> { 
                        this.tableData = response.data
                        console.log(this.tableData);
                    })
                    .catch(function (error) {
                        
                        
                        console.log(error);
                    });
                }
            },
        
        mounted() {
            this.LoadAllStudent()
        }

        
    }

</script>

<style lang="scss" scoped>

</style>
