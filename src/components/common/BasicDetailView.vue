<!--suppress ALL -->
<template>
    <div class="Detail">
        <div class="basicDetail">
            <div class="wrapperDetail">
                <el-row>
                    <div class="line_buttom"/>
                </el-row>
                <el-row>
                    <li class="ul_center d_li">
                        <PanelGroup :count="count" @handleSetLineChartData="handleSetLineChartData"/>
                    </li>
                    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
                        <LineChart :chartData="returnChartData"/>
                    </el-row>
                </el-row>
                <el-row>
                    <div class="line_middle"/>
                </el-row>

                <el-row class="g-description">
                    <el-row type="flex" align="middle">
                        <el-col :span="3" class="left">
                            完成时间:
                        </el-col>
                        <el-col type="flex" justify="space-between">
                            <el-progress :percentage="100"/>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="start">

                        <el-col :span="3">还款方式:</el-col>
                        <el-col :span="5">
                            先息后本
                            <el-popover
                                    placement="right-start"
                                    width="200"
                                    trigger="hover"
                                    content="">
                                <div class="iq-remark">
                                    <p>出借金额为X，历史年化为Y，期限为Z。</p>
                                    <p>1.等额本息：</p>
                                    <p>每月应还本息的计算公式为：</p>
                                    <p class="blue-color">X*[Y/12*(1+Y/12)^Z]÷{[(1+Y/12)^Z]-1}</p>
                                    <p>2.先息后本：</p>
                                    <p>每月还息公式为：<span class="blue-color">X*Y/12</span></p>
                                    <p>最后一期还款本息公式：<span class="blue-color">X+X*Y/12</span></p>
                                    <p>3.车商贷先息后本：<span class="blue-color">X+X*Y/365*Z</span></p>

                                </div>
                                <i slot="reference" class="el-icon-question"/>

                            </el-popover>
                        </el-col>

                        <el-col :span="3" :offset="9">计息时间:</el-col>
                        <el-col :span="4">
                            出借成功后计息
                            <el-popover
                                    placement="right-start"
                                    title=""
                                    width="200"
                                    trigger="hover"
                                    content="">
                                <div class="iq-remark">
                                    <p class="blue-color">即投计息：根据出借人实际出借日期计算计息天数</p>
                                    <p>例：出借日为：11月06日</p>
                                    <p>第一期还款日：12月01日</p>
                                    <p>计息天数：26天</p>
                                </div>
                                <i slot="reference" class="el-icon-question"/>
                            </el-popover>
                        </el-col>

                    </el-row>
                    <el-row type="flex" align="middle">
                        <el-col :span="3" class="left">还款日期:</el-col>
                        <el-col :span="10">
                            每出借<b style="color:orange">100</b>元，<b style="color:orange">每日</b>可获得利息收益<b
                                style="color:orange">0.0247</b>元
                        </el-col>
                        <el-col :span="3" :offset="7">
                            <el-button type="primary" plain round size="mini" @click="dialogVisible = true">借款协议
                            </el-button>
                            <el-dialog
                                    :visible.sync="dialogVisible"
                                    :before-close="handleClose"
                                    class="dialog_body"
                                    title="提示"
                                    width="70%">
                <span>
                    <div>

                        <div class="riskxy" id="riskxy">
		<h2 class="bt b">借款合同</h2>
		<p>合同编号：****</p>
		<p class="p_im">请您仔细阅读并充分理解本协议。本协议采用电子签署、点击成交方式，您选择同意电子签署，即视为完全同意并接受本协议，愿受其约束，本协议即时生效。</p>
		<br>
		<p>借款人(甲方)： **</p>
		<p>身份证号: ******************</p>
		<p>联系电话: **********
		</p>
		<p>家庭住址: ******</p>
		<br>
		<p>出借人(乙方):见附件一《出借人列表》</p>
		<br>
		<p>居间方（丙方）：武汉玖信普惠金融信息服务有限公司</p>
		<p>地址：武汉市江汉区王家墩中央商务区淮海路泛海国际SOHO城7号楼17楼</p>
		<br>
		<p>本次借款由丙方提供居间撮合服务，甲乙双方同意于平台上签署本协议并据此产生约束双方的法律效力。</p>

		<p class="b"><b>第一章 定义和释义</b></p>
		<p><b>1.1定义</b></p>
		<p>在本协议中，除非上下文另有解释或文义另有所指，下述名词定义如下：</p>
		<table border="1px" cellspacing="0" cellpadding="0">
			<tbody><tr>
				<td width="10%">玖融网</td>
				<td>武汉玖信普惠金融信息服务有限公司</td>
			</tr>
			<tr>
				<td>注册用户</td>
				<td>指在平台完成实名认证注册，参与平台项下交易的机构或自然人</td>
			</tr>
			<tr>
				<td>出借人</td>
				<td>指在平台上向甲方出借资金的注册用户</td>
			</tr>
			<tr>
				<td>平台</td>
				<td>指武汉玖信普惠金融信息服务有限公司设立并运营管理的，为注册用户提供包括但不限于线上交易；信息传递、披露与撮合；辅助结算等相关服务的电子交易系统，包括玖融网平台（网址为http://www.jiurong.com/）、手机 APP 及后续可能开发的其他平台或软件。</td>
			</tr>
			<tr>
				<td>存管银行</td>
				<td>指为平台交易资金提供支付结算服务的商业银行</td>
			</tr>
			<tr>
				<td>不可抗力</td>
				<td>指在本协议签署后发生的、本协议签署时不能预见的、其发生与后果无法避免或克服的、妨碍任何一方全部或部分履约的所有事件。上述事件包括地震、台风、水灾、火灾、战争、国际或国内通讯或运输中断、电力中断、大规模网络瘫痪、政府或公共机构的行为（包括重大法律变更或政策调整）、流行病、动乱、罢工，以及一般国际商业惯例认作不可抗力的其他事件。</td>
			</tr>
			<tr>
				<td>中国</td>
				<td>指中华人民共和国，为本协议之目的，不包括香港特别行政区、澳门特别行政区和台湾地区。</td>
			</tr>
			<tr>
				<td>法律</td>
				<td>指中国有权机关颁布的法律、行政法规、地方性法规、部门规章或其他任何规范性文件。</td>
			</tr>
		</tbody></table>
		<br>
		<p><b>1.2释义</b></p>
		<p class="z1">(a) 除非本协议有任何相反用词表述：</p>

		<p class="z2">(i) 任何当事方应被解释为包括他们各自的承继者和其所允许的受让人和被转让人；</p>

		<p class="z2">(ii) 凡提及一份协议或文书，应指经不时修订或更新的该份交易文件或其他协议或文书；</p>

		<p class="z2">(iii) 凡提及法律规定应指被修订或更新的规定；</p>

		<p class="z2">(iv) 凡提及一天中的某个时间应指北京时间。</p>

		<p class="z1">(b) 章节、条款及附件的标题仅为参考便利之用。</p>

		<p class="b"><b>第二章 借款</b></p>
		<p><b>2.1	借款基本信息</b></p>
		<p class="z1">(a)	甲方拟借款总金额为：[	    ] 元人民币（以下简称“目标金额”，目标金额及借款详细情况具体以平台发布的信息为准）。</p>
		<p class="z1">(b)	乙方同意向甲方出借：[	    ] 元人民币，以乙方实际成功投资金额为准（下简称“拟出借金额”）。拟出借金额与目标金额之间的差额（如有）由甲方通过平台另行筹集。</p>
		<p class="z1">(c)	借款期限为：[     ]年[    ]月[   ]日起至[     ]年[   ]月[   ] 日（以平台发布的期限为准）（下简称“借款期限”）。</p>
		<p class="z1">(d)	借款利率：年化利率为[   ]%   （下简称“借款利率”）。</p>
		<p class="z1">(e)	借款用途：借款详细情况具体以平台发布的信息为准。</p>
		<p class="z1">(f)	收益起算日：募集期限届满（或目标金额提前募集成功）之日起计算收益。</p>
		<p class="z1">(g)	募集期限：以平台发布的信息为准。</p>
		<p class="z1">(h)	还款方式：[      ] （详见本协议附件二《还款计划表》）。</p>

		<br>
		<p><b>2.2借款发放</b></p>
		<p>通过存管银行从乙方账户将借款金额划账到甲方账户。</p>
		<br>
		<p><b>2.3募集失败</b></p>
		<p>如果甲方通过平台成功获得资金金额在募集期限未达到目标金额的[100]%，则视为交易失败，乙方已支付的拟出借金额应在募集期限届满之日后的下一个工作日无息退还至乙方的电子账户，本协议自动终止。</p>
		<br>
		<p><b>2.4 提前还款 </b></p>
		<p> 甲方如提前还款，借款期限不足月的，则按当期整月支付利息（例如借款期限不满1个月的，按1个月支付利息；借款期限为1个月零3日的，按2个月支付利息），将尚未偿还的剩余本金及当期整月利息一次性支付至乙方账户。 </p>

		<p class="b"><b>第三章 账户管理</b></p>
		<p><b>3.1	账户管理</b></p>

		<p class="z1">（a）甲方和乙方同意在玖融网指定的存管银行开立电子账户，并为履行本协议之目的不可撤销的授权存管银行进行资金划转。</p>
                            <p class="z1">（b）协议双方同意电子账户中的余额资金所产生的利息，以银行的规则为准，银行自行与用户结算。</p>
		<p class="z1">（c）协议双方应通过平台在支付机构绑定银行借记卡，以使得可以向或从电子账户中划转资金。</p>


		<p class="b"><b>第四章 声明与保证</b></p>

		<p><b>4.1	甲方的保证</b></p>
		<p class="z1">（a）	甲方拥有完全的民事权利能力和民事行为能力以签署本协议、享有本协议项下任何权利及履行本协议项下任何义务所必需的一切权利和授权。</p>
		<p class="z1">（b）	甲方保证其使用资金用途遵守中国法律规定。</p>
		<p class="z1">（c）	签署和履行本协议没有违反适用的法律，亦不会与以其为对象或以其为一方对其资产有约束力的任何协议或其他文件产生任何冲突。</p>
		<br>
		<p><b>4.2	乙方的保证</b></p>
		<p class="z1">（a）	乙方拥有完全的民事权利能力和民事行为能力以签署本协议、享有本协议项下任何权利及履行本协议项下任何义务所必需的一切权利和授权。</p>
		<p class="z1">（b）	乙方签署和履行本协议没有违反适用的法律，亦不会与以其为对象或以其为一方对其资产有约束力的任何协议或其他文件产生任何冲突。</p>
		<br>
		<p>乙方保证其所用于出借的资金来源合法，并且乙方是该资金的合法所有人。如果第三方对资金归属、合法性等问题发生争议，由乙方承担责任。</p>


		<p class="b"><b>第五章 违约责任</b></p>
		<p>5.1在本合同有效期内，有下列事项之一的均视为甲方违约，并视为合同提前到期，乙方可要求甲方立即清偿全部借款本息、违约金和因提前还款而应承担的相关费用。 </p>
		<p class="z1">（a）、甲方违反本合同任何一项条款的约定； </p>
		<p class="z1">（b）、甲方在本合同期内未按时归还借款本息； </p>
		<p class="z1">（c）、其他可能严重影响甲方归还借款本息的行为。</p>
		<p>5.2 甲方逾期还款或违约，除必须按本合同还款计划表规定金额向乙方正常偿付本息外，还须每日按借款剩余本金的千分之  1  向乙方支付逾期违约金直至甲方归还实际全部债务之日止。</p>
		<p>5.3甲方承诺自觉履行本合同各条款的义务，无论任何原因导致乙方的合同利益或合同权利受到损害，甲方将承担本合同项下的借款本金、利息、违约金等，还包括但不限于乙方在依法主张权利过程中发生的诉讼费或仲裁费、公告费、评估费、拍卖费、律师费、因诉讼财产保全而提供担保财产的担保费用或折旧损失或利息(年利率24%)、保险、鉴定费、催告费、拖车费、保管费、登记费等费用。</p>

		<p class="b"><b>第六章 债权转让</b></p>
		<p>6.1借款发生后，乙方有权将债权转让给第三人，并会将债权转让情况通知甲方，甲方收到债权转让通知即对其发生法律效力，新的债权人有权就转让的债权直接向甲方主张</p>
		<p>6.2债权转让的通知方式由乙方委托“玖融网”通过平台发布债权转让的通知，甲方对以上通知方式都予以认可。</p>


		<p class="b"><b>第七章 杂项条款</b></p>

		<p><b>7.1丙方的权利与义务</b></p>
		<p class="z1">（a）	双方在此同意，作为本次借款交易的居间服务方及平台提供方，在协议履行过程中出现争议的，玖融网有权对本协议相关条款的进行合理解释。</p>
		<p class="z1">（b）	双方一致确认，玖融网仅为本协议项下的借款交易提供中介服务，并不就本次借款交易向任何一方承担任何保证责任或其他担保责任。</p>
		<p class="z1">（c）	双方确认并同意，一致委托玖融网对本协议项下的任何金额进行计算并允许通过平台发布；在无明显错误的情况下，玖融网对本合同项下任何金额的任何证明或计算结果，应作为该金额有关事项的终局证明。</p>
		<p class="z1">（d）	乙方同意和确认，由于出借人比较分散，无法亲自管理和行使对甲方的权利，为保障所有出借人的债权安全，乙方将其在本合同项下对甲方的权利不可撤销地授权并委托玖融网代为行使，玖融网接受委托行使上述对借款人的权利所产生的法律责任及后果由乙方承担。</p>

		<br>
		<p><b>7.2保密</b></p>
		<p class="z1">未经另一方事先书面同意，任何一方不得将与本协议以及本协议项下交易和涉及另一方的任何信息向任何人士披露。</p>
		<p class="z1">本条不限制本协议任何一方根据适用法律、法规和有权机关的要求，就与本协议项下有关的信息进行披露。</p>
		<br>
		<p><b>7.3部分无效</b></p>
		<p class="z1">本协议的任何规定在任何司法管辖地是或成为不合法、无效或不可执行不应影响其他规定的合法性、有效性或可执行性，且任何该等规定在任何司法管辖地是或成为不合法、无效或不可执行不应影响该等规定在任何其他司法管辖地的合法性、有效性或可执行性。</p>
		<br>
		<p><b>7.4变更和修改</b></p>
		<p class="z1">本协议可经双方协商一致后变更或修改，所有修改的协议均构成本协议的一部分。</p>
		<br>
		<p><b>7.5不可抗力</b></p>
		<p class="z1">本协议任一方因不可抗力的发生而未能履行或延迟履行本协议，但已经采取适当措施避免损失扩大，及时通知相对方，并在不可抗力发生后 15 个工作日内向本协议另一方提供事故详情和有效证明，则该未能履行或延迟履行其义务的一方将不承担本协议项下的违约责任。不可抗力发生后，协议三方应通过友好协商，尽最大可能继续执行本协议。</p>
		<br>
		<p><b>7.6 法律适用</b></p>
		<p class="z1">本协议的订立、效力、解释、履行及争议的解决均适用中国法律。</p>
		<br>
		<p><b>7.7争议解决</b></p>
		<p class="z1">因本合同引起的或与本合同有关的任何争议，双方同意将争议提交中国广州仲裁委员会，按照现行有效的网络仲裁规则进行网络仲裁、书面审理。仲裁裁决是终局的，对各方均具有约束力。各方确认以本合同中预留的联络邮箱，作为双方之间往来及涉及仲裁时仲裁机构送达相关材料的送达地址；并以预留的手机号码为短信通知号码。合同任何一方向对方及仲裁机构向双方发出的任何通知，以电子邮件或者短信等形式发出，送至约定邮箱或手机号码，即视为送达。如一方需变更联络邮箱或者手机号码的，应当与对方协商一致，并提交平台确认。</p>

		<p class="b"><b>第八章  其他</b></p>
		<p class="z1"><b>8.1本合同于甲乙丙三方在“玖融网”平台通过电子签章的形式签字确认后生效。本合同以数据电文的形式订立，与书面合同具有同等法律效力。</b></p>
		<br>
		<br>
		<br><br>
		<br>
		<p><span>甲方（电子签章）： ____________</span><span>乙方（电子签章）：____________ </span></p>
		<p><span>_____年 _____月_____日 </span><span>_____年_____月_____日 <span></span></span></p>
			<br>
		<br><br>
		<br>
		<p>丙方（电子签章）</p>
		<br>
                            <p>_____年 _____月_____日</p>
                            <br>
		<br>
		<br><br>
		<br>
		<p>附件一：</p>
		<br>
		<p class="b"><b>出借人列表</b></p>
		<br>
		<table border="1px" cellspacing="0" cellpadding="0" style="width: 100%;">
			<tbody><tr>
				<td width="30%">出借人姓名</td>
				<td width="40%">出借人身份证号</td>
				<td width="30%">出借金额</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
		</tbody></table>
		<br>
		<br>
		<br>
		<p>附件二：</p>
		<br>
		<p class="b"><b>还款计划表 </b></p>
		<br>
		<table border="1px" cellspacing="0" cellpadding="0" style="width: 100%;">
			<tbody><tr>
				<td width="20%">还款期数</td>
				<td width="20%">当期还款日期</td>
				<td width="20%">当期应还本金</td>
				<td width="20%">当期应还利息</td>
				<td width="20%">当期应还总额</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
		</tbody></table>

	</div>

                    </div>
                </span>
                                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
                            </el-dialog>
                        </el-col>

                    </el-row>
                    <el-row type="flex" align="middle">
                        <el-col :span="3" class="left"><b>温馨提示：</b></el-col>
                        <el-col :span="20" class="left"><b>市场有风险，出借需谨慎</b></el-col>
                    </el-row>
                </el-row>
                <el-row>
                    <div class="line"/>
                </el-row>

            </div>
        </div>
        <div class="basicDetailCard">
            <el-tabs v-model="activeName" type="border-card" @tab-click="handleCardClick">
                <el-tab-pane label="借款详情" name="first">
                    <el-card class="box-card" shadow="always">
                        <el-row>
                            <el-row>
                                <i class="el-icon-info box-icon"/>
                                <span class="project-title">
                  <b>项目介绍</b>
                </span>
                            </el-row>
                            <div class="project-content">
                                <el-row>
                                    <el-col :span="3">
                                        项目描述：
                                    </el-col>
                                    <el-col :span="21">
                                        车商贷是在汽车供应链环节中的采购阶段基于商品交易订单（预付账款）而产生的短期融资业务，资金专项用于车商采购车辆，
                                        风险控制直接渗透到供应链企业的经营环节，通过对车辆及车辆合规证明材料的实际控制来把控风险。
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借&nbsp;&nbsp;款&nbsp;&nbsp;方：
                                    </el-col>
                                    <el-col :span="21">
                                        金沙****责任公司
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借款用途：
                                    </el-col>
                                    <el-col :span="21">
                                        采购新车
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        物&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;流：
                                    </el-col>
                                    <el-col :span="21">
                                        本地自提
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;险：
                                    </el-col>
                                    <el-col :span="21">
                                        /
                                    </el-col>
                                </el-row>
                            </div>
                        </el-row>

                    </el-card>
                    <el-card class="box-card" shadow="always">
                        <el-row>
                            <el-row>
                                <i class="el-icon-info box-icon"/>
                                <span class="project-title">
                  <b>项目介绍</b>
                </span>
                            </el-row>
                            <div class="project-content">
                                <el-row>
                                    <el-col :span="3">
                                        项目描述：
                                    </el-col>
                                    <el-col :span="21">
                                        车商贷是在汽车供应链环节中的采购阶段基于商品交易订单（预付账款）而产生的短期融资业务，资金专项用于车商采购车辆，
                                        风险控制直接渗透到供应链企业的经营环节，通过对车辆及车辆合规证明材料的实际控制来把控风险。
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借&nbsp;&nbsp;款&nbsp;&nbsp;方：
                                    </el-col>
                                    <el-col :span="21">
                                        金沙****责任公司
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借款用途：
                                    </el-col>
                                    <el-col :span="21">
                                        采购新车
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        物&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;流：
                                    </el-col>
                                    <el-col :span="21">
                                        本地自提
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;险：
                                    </el-col>
                                    <el-col :span="21">
                                        /
                                    </el-col>
                                </el-row>
                            </div>
                        </el-row>

                    </el-card>
                    <el-card class="box-card" shadow="always">
                        <el-row>
                            <el-row>
                                <i class="el-icon-info box-icon"/>
                                <span class="project-title">
                  <b>项目介绍</b>
                </span>
                            </el-row>
                            <div class="project-content">
                                <el-row>
                                    <el-col :span="3">
                                        项目描述：
                                    </el-col>
                                    <el-col :span="21">
                                        车商贷是在汽车供应链环节中的采购阶段基于商品交易订单（预付账款）而产生的短期融资业务，资金专项用于车商采购车辆，
                                        风险控制直接渗透到供应链企业的经营环节，通过对车辆及车辆合规证明材料的实际控制来把控风险。
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借&nbsp;&nbsp;款&nbsp;&nbsp;方：
                                    </el-col>
                                    <el-col :span="21">
                                        金沙****责任公司
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借款用途：
                                    </el-col>
                                    <el-col :span="21">
                                        采购新车
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        物&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;流：
                                    </el-col>
                                    <el-col :span="21">
                                        本地自提
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;险：
                                    </el-col>
                                    <el-col :span="21">
                                        /
                                    </el-col>
                                </el-row>
                            </div>
                        </el-row>

                    </el-card>
                    <el-card class="box-card" shadow="always">
                        <el-row>
                            <el-row>
                                <i class="el-icon-info box-icon"/>
                                <span class="project-title">
                  <b>项目介绍</b>
                </span>
                            </el-row>
                            <div class="project-content">
                                <el-row>
                                    <el-col :span="3">
                                        项目描述：
                                    </el-col>
                                    <el-col :span="21">
                                        车商贷是在汽车供应链环节中的采购阶段基于商品交易订单（预付账款）而产生的短期融资业务，资金专项用于车商采购车辆，
                                        风险控制直接渗透到供应链企业的经营环节，通过对车辆及车辆合规证明材料的实际控制来把控风险。
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借&nbsp;&nbsp;款&nbsp;&nbsp;方：
                                    </el-col>
                                    <el-col :span="21">
                                        金沙****责任公司
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借款用途：
                                    </el-col>
                                    <el-col :span="21">
                                        采购新车
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        物&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;流：
                                    </el-col>
                                    <el-col :span="21">
                                        本地自提
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;险：
                                    </el-col>
                                    <el-col :span="21">
                                        /
                                    </el-col>
                                </el-row>
                            </div>
                        </el-row>

                    </el-card>

                </el-tab-pane>
                <el-tab-pane label="出借记录" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="还款详情" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="产品介绍" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>

    </div>
</template>

<script>
  /* eslint-disable */
  import PanelGroup from './PanelGroup';
  import LineChart from './LineChart';

  export default {
    name: 'basic-detail-view',
    components: {
      PanelGroup,
      LineChart
    },
    props: ['detailData'],
    data () {
      return {
        lineChartData: [
          {
            expectedData: [101, 120, 161, 134, 105, 160, 165, 120, 161, 134, 105, 160, 165],
            actualData: [120, 82, 91, 154, 162, 140, 145, 120, 161, 134, 105, 160, 165]
          },
          {
            expectedData: [200, 192, 120, 144, 160, 130, 140, 120, 161, 134, 105, 160, 165],
            actualData: [180, 160, 151, 106, 145, 150, 130, 120, 161, 134, 105, 160, 165]
          },
          {
            expectedData: [80, 100, 121, 104, 105, 90, 100, 120, 161, 134, 105, 160, 165],
            actualData: [120, 90, 100, 138, 142, 130, 130, 120, 161, 134, 105, 160, 165]
          }
        ],
        count: [
          {
            name: '历史周期',
            startVal: 0,
            endVal: 8.4,
            decimal: true
          },
          {
            name: '周期',
            startVal: 0,
            endVal: 900000
          },
          {
            name: '金额',
            startVal: 0,
            endVal: 192000
          }
        ],
        dialogVisible: false,
        activeName: 'first',
        returnChartData: {xAxisName: '表名', actualData: [1, 2, 3, 0], type: Number}
      };
    },
    methods: {
      handleClose (done) {
        this.$confirm('sure?').then(_ => {
          done();
        }).catch(_ => {});
      },
      handleCardClick (tab, event) {
        console.log(tab, event);
      },
      handleSetLineChartData (type) {
        this.returnChartData = this.lineChartData[type];
      },
      mounted () {
        this.returnChartData = this.lineChartData[0];
      }
    }
  };
</script>

<style scoped lang="scss">
    .Detail {
        margin: 0 50px;
    }

    .basicDetail {
        background-color: white;

        .wrapperDetail {
            padding-bottom: 12px;
            .line_buttom {
                height: 14px;
                border-bottom: 1px dotted #C0C0C0;
            }
            .line_middle {
                height: 7px;
                border-top: 1px dotted #C0C0C0;
            }
        }
    }

    .basicDetailCard {
        background-color: white;
        width: 100%;
        margin: 20px 0;
        border: 1px solid #f8f8f8;
        .project-title {
            font-size: 28px;
        }
        .box-icon {
            font-size: 18px;
            margin-right: 6px;
        }
        .project-content {
            margin-left: 25px;
        }
    }

    .g-description {
        padding: 10px 50px;
    }

    .left {
        color: grey;
    }

    .iq-remark {
        font-size: 10px;
    }

    .blue-color {
        color: blue;
    }

    .d_li {
        border: 0;
        text-align: left;
        .li_top {
            display: block;
            font-size: 14px;
            color: grey;
            line-height: 18px;
            font-size: 14px;
        }
        .li_buttom {
            display: block;
            color: #f60;
            line-height: 80px;
            font-size: 40px;
        }
    }

    .el-dialog {
        display: flex !important;
        flex-direction: column !important;
        .el_dialog__body {
            overflow: auto !important;
        }
    }


</style>
