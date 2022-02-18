// pages/cooperation/cooperation.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        classbackground:'background',
        background:'../../resource/img/background.png',
        logo:'../../resource/img/logo.png',
        productService:'产品服务',
        service:'健康照护、疾病咨询、就医指引、药物咨询、营养咨询、医保咨询',
        businessPhilosophy:'经营理念',
        concept1:'医疗服务的进步，离不开不断探索科研领域，我们与监管机关和科研中心合作，进行人体免疫相关(即Leukopak)产品的研发，同时协助建立符合中国细胞产业发展且适用于医院的操作及质量规范，从评估细胞供体的筛选、细胞供体的采集及运输皆有专业安全的设备和规范化的采集流程。',
        concept2:'我司主要的服务项目，系招募对医学临床试验感兴趣，且愿意提供协助的志愿者；临床试验通常是由生技药厂或医师发起，为了研究新的治疗方式、药品、医疗器材、疫苗在人体运用的安全性与有效性。',
        concept3:'因为每一项新的医疗技术，在广泛运用在治疗病人之前，研究人员必须先收集相关信息，反复确认该技术针对病症是否特别有效？该技术是否会对病患的病情产生不良反应？这些信息皆须以临床试验的方式收集相关信息，才能够尽可能的完善了解什么样的治疗方式或用药剂量是最适合病人的；若有您的参与，对于确认治疗疾病的新型医疗技术、新药上市、确定新诊断或治疗方法是否有效，同时改进药品或医疗器材的质量，将有很大的贡献。',
        concept4:'如果您有意愿希望自己对科学有所贡献，且欲加入临床试验健康志愿者研究群体的行列，请与我们联系并提供您的一些基本数据，我们会在保证所有志愿者身心健康不受危害的前提下，请您提供相关的临床试验帮助；同时，我们会确实保护您的个人资料，并仅供日后联络邀请您参与临床试验计划用。',
        serviceTeam:'服务团队',
        team1:'我司依循优良临床试验准则（Good Clinical Practice, GCP）执行临床试验，拥有完善之相关软硬件设备，架构出优良临床试验病房、临床试验药品管理及，具GCP认证之卓越的临床试验药品管理，具临床试验研究经验的主持医师及临床研究护理师研究团队，我司具备执行全国性临床试验之经验，可提供国内外药厂及试验主持人优良之临床试验质量及服务水平，并对志愿者安全、公平与福祉做最高的维护，为药物临床试验研究之临床试验场域。',
        team2:'五人菁英小组成员包含试验主持人PI (Principle Investigator)试验总负责人，成员包含三位多年资深临床经验医师、二位3年以上临床经验护理人员，统筹试验进度资源、管理收案进度、确认系统数据登记正确、负责招募受试者、管理试验送审文件、执行计划书流程、确认病人符合全部收案条件、评断AE(adverse event)与试验药品的相关性、通报不良事件、开立试验药品、试验期间药物治疗决策、执行身体评估；协同主持人Co-I (Co-Investigator)，负责招募受试者、管理试验送审文件、执行计划书流程、确认病人符合全部收案条件、评断AE的相关性、通报不良事件、开立试验药品、试验期间药物治疗决策、执行身体评估。研究护理师SC (Study coordinator)，依照protocol执行细节、与受试者联系返诊时间、给予试验药品、通报不良事件、整理试验数据、返诊数值key进试验系统、上传试验影像/报告、抽血检测、Prescreen受试者、发放试验药品、协助送审资料的准备。'
    },

    translateToCh:function(e){
        this.setData({
            classbackground:'background',
            productService:'产品服务',
            service:'健康照护、疾病咨询、就医指引、药物咨询、营养咨询、医保咨询',
            businessPhilosophy:'经营理念',
            concept1:'医疗服务的进步，离不开不断探索科研领域，我们与监管机关和科研中心合作，进行人体免疫相关(即Leukopak)产品的研发，同时协助建立符合中国细胞产业发展且适用于医院的操作及质量规范，从评估细胞供体的筛选、细胞供体的采集及运输皆有专业安全的设备和规范化的采集流程。',
            concept2:'我司主要的服务项目，系招募对医学临床试验感兴趣，且愿意提供协助的志愿者；临床试验通常是由生技药厂或医师发起，为了研究新的治疗方式、药品、医疗器材、疫苗在人体运用的安全性与有效性。',
            concept3:'因为每一项新的医疗技术，在广泛运用在治疗病人之前，研究人员必须先收集相关信息，反复确认该技术针对病症是否特别有效？该技术是否会对病患的病情产生不良反应？这些信息皆须以临床试验的方式收集相关信息，才能够尽可能的完善了解什么样的治疗方式或用药剂量是最适合病人的；若有您的参与，对于确认治疗疾病的新型医疗技术、新药上市、确定新诊断或治疗方法是否有效，同时改进药品或医疗器材的质量，将有很大的贡献。',
            concept4:'如果您有意愿希望自己对科学有所贡献，且欲加入临床试验健康志愿者研究群体的行列，请与我们联系并提供您的一些基本数据，我们会在保证所有志愿者身心健康不受危害的前提下，请您提供相关的临床试验帮助；同时，我们会确实保护您的个人资料，并仅供日后联络邀请您参与临床试验计划用。',
            serviceTeam:'服务团队',
            team1:'我司依循优良临床试验准则（Good Clinical Practice, GCP）执行临床试验，拥有完善之相关软硬件设备，架构出优良临床试验病房、临床试验药品管理及，具GCP认证之卓越的临床试验药品管理，具临床试验研究经验的主持医师及临床研究护理师研究团队，我司具备执行全国性临床试验之经验，可提供国内外药厂及试验主持人优良之临床试验质量及服务水平，并对志愿者安全、公平与福祉做最高的维护，为药物临床试验研究之临床试验场域。',
            team2:'五人菁英小组成员包含试验主持人PI (Principle Investigator)试验总负责人，成员包含三位多年资深临床经验医师、二位3年以上临床经验护理人员，统筹试验进度资源、管理收案进度、确认系统数据登记正确、负责招募受试者、管理试验送审文件、执行计划书流程、确认病人符合全部收案条件、评断AE(adverse event)与试验药品的相关性、通报不良事件、开立试验药品、试验期间药物治疗决策、执行身体评估；协同主持人Co-I (Co-Investigator)，负责招募受试者、管理试验送审文件、执行计划书流程、确认病人符合全部收案条件、评断AE的相关性、通报不良事件、开立试验药品、试验期间药物治疗决策、执行身体评估。研究护理师SC (Study coordinator)，依照protocol执行细节、与受试者联系返诊时间、给予试验药品、通报不良事件、整理试验数据、返诊数值key进试验系统、上传试验影像/报告、抽血检测、Prescreen受试者、发放试验药品、协助送审资料的准备。'
        })
    },

    translateToEng:function(e){
        this.setData({
            classbackground:'engBackground',
            productService:'Product Service',
            service:'Health care, disease consultation, medical consultation, drug consultation, nutrition consultation, medical insurance consultation',
            businessPhilosophy:'Business Philosophy',
            concept1:'The progress of medical services is inseparable from the continuous exploration of scientific research fields. We cooperate with regulatory agencies and scientific research centers to carry out research and development of human immune-related (ie Leukopak) products, and at the same time assist in the establishment of operations and quality that are in line with the development of China\'s cell industry and are suitable for hospitals. Standardization, from the evaluation of cell donor screening, cell donor collection and transportation, there are professional and safe equipment and standardized collection procedures.',
            concept2:'Our main service project is to recruit volunteers who are interested in medical clinical trials and are willing to provide assistance; clinical trials are usually initiated by biopharmaceutical companies or physicians, in order to study new treatment methods, drugs, medical equipment, vaccines Safety and efficacy in human use.',
            concept3:'Because every new medical technology, before it is widely used to treat patients, researchers must first collect relevant information and repeatedly confirm whether the technology is particularly effective for the disease? Will the technology have adverse effects on the patient\'s condition? All this information must be collected in the form of clinical trials, in order to be able to fully understand what kind of treatment method or dosage is most suitable for the patient; Bringing it to market, determining whether a new diagnosis or treatment is effective, and improving the quality of a drug or medical device will make a big contribution.',
            concept4:'If you are willing to contribute to science and want to join the research group of healthy volunteers in clinical trials, please contact us and provide some of your basic data, we will ensure that all volunteers will not endanger their physical and mental health On the premise, please provide relevant clinical trial assistance; at the same time, we will protect your personal information and only use it for future contact and invitation to participate in the clinical trial plan.',
            serviceTeam:'Service Team',
            team1:'Our company conducts clinical trials in accordance with Good Clinical Practice (GCP), has complete relevant software and hardware equipment, and builds excellent clinical trial wards, clinical trial drug management and excellent clinical trial drug management with GCP certification. The research team of presiding physicians and clinical research nurses with clinical trial research experience, our company has experience in conducting national clinical trials, and can provide domestic and foreign pharmaceutical companies and trial hosts with excellent clinical trial quality and service level, and volunteers The highest maintenance of safety, fairness and well-being is the clinical trial field of drug clinical trial research.',
            team2:'The five-person elite team includes the chief director of the trial PI (Principle Investigator), the trial host, and the members include three physicians with many years of clinical experience and two nurses with more than 3 years of clinical experience. Confirm that the system data is registered correctly, be responsible for recruiting subjects, manage the trial submission documents, implement the plan process, confirm that the patient meets all the acceptance conditions, judge the correlation between AE (adverse event) and the trial drug, report adverse events, and open the trial Drugs, drug treatment decisions during the trial, and physical assessment; co-host Co-I (Co-Investigator), responsible for recruiting subjects, managing trial submission documents, implementing the plan process, confirming that patients meet all the conditions for acceptance, and judging AEs associations, reporting adverse events, prescribing the investigational drug, making decisions about drug treatment during the trial, and performing physical assessments. Research Nurse SC (Study coordinator), execute details according to the protocol, contact the subjects for the return visit time, give the test drug, report adverse events, organize the test data, key the return value into the test system, upload test images/reports, draw Blood testing, prescreening subjects, distributing experimental drugs, assisting in the preparation of documents for review.'
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})