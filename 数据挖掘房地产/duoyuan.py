import pandas as pd
from sklearn.preprocessing import StandardScaler
# -*- coding: utf-8 -*-
from sklearn.linear_model import LinearRegression

df = pd.read_excel('fenxi.xlsx')
X = df[['房地产开发企业个数(个)','房地产开发企业平均从业人数(人)','房地产开发企业待开发土地面积(万平方米)',
        '房地产开发企业计划总投资(亿元)','商品房销售面积(万平方米)','商品房销售额(亿元)',
        '房地产开发企业资产负债率(%)','房地产开发企业资产总计(亿元)','房地产开发企业营业利润(亿元)',
        '房地产开发企业施工房屋面积(万平方米)','房地产开发企业竣工房屋面积(万平方米)']]
Y = df['商品房平均销售价格(元/平方米)']
#df.corr().to_csv("person.csv")
from sklearn.feature_selection import VarianceThreshold

# 初始化标准化对象
scaler = StandardScaler()

# 对数据集进行标准化
X_scaled = scaler.fit_transform(X)
# 设置方差阈值
threshold = 1

#初始化VarianceThreshold对象
selector = VarianceThreshold(threshold=threshold)

# 应用特征选择器到数据集
X_selected = selector.fit_transform(X_scaled)

# 获取被选取的特征的布尔掩码
selected_features_mask = selector.get_support()

# 使用掩码从原始数据中选择相应的列
selected_features = X.columns[selected_features_mask]

# 打印被选取的特征
print("Selected Features:")
print(selected_features)

model = LinearRegression()
model.fit(X_selected, Y)


print(model.coef_, model.intercept_)

import statsmodels.api as sm
X2 = sm.add_constant(X_selected)
est = sm.OLS(Y,X2).fit()
print(est.summary())

'''
Dep. Variable（因变量）:

商品房平均销售价格(元/平方米) 是被预测的因变量。
R-squared（R平方）:

衡量模型对观测数据的拟合程度，取值范围在0到1之间。0表示模型无拟合能力，1表示完美拟合。在这个例子中，R平方为0.99，说明模型很好地解释了因变量的变化。
Adj. R-squared（调整后的R平方）:

考虑了模型中自变量的数量，以避免过拟合。与R平方相似，但在考虑模型的复杂度时进行了调整。
F-statistic（F统计量）:

用于检验模型整体的显著性。在这个例子中，F-statistic为527.8，对应的Prob (F-statistic)为3.33e-16，非常接近零，表示模型整体上是显著的。
coef（系数）:

表示模型中每个自变量的系数。在这个例子中，const 对应截距，x1、x2、x3 对应相应自变量的系数。
std err（标准误差）:
2594
527 0.20
0.21
0.59

用于衡量系数的不确定性。标准误差越小，系数越可信。
t-statistic（t统计量）:

表示对应系数是否显著不等于零。如果t-statistic的绝对值较大，P>|t| 接近零，那么我们可以拒绝系数等于零的假设。
P>|t|（P值）:

是对应系数是否显著的概率。通常，当P值小于显著性水平（通常选择0.05）时，我们拒绝零假设，认为这个系数是显著的。
[0.025 0.975]（置信区间）:

给出了每个系数的95%置信区间。在这个区间内的值，我们有95%的置信水平认为是真实的系数。
Omnibus, Prob(Omnibus), Skew, Kurtosis:

用于检验残差是否符合正态分布的统计量。Prob(Omnibus)越大，越接近正态分布。
Durbin-Watson:

用于检验残差之间的自相关性。通常，值在1.5到2.5之间被认为是正常的。
Jarque-Bera (JB), Prob(JB):

检验残差是否符合正态分布。Prob(JB)越大，越接近正态分布。
Cond. No.:

条件数，用于检测自变量之间是否存在共线性。较大的条件数可能表示存在共线性问题。

No. Observations（观测值数量）:

数据集中的观测值数量。
Df Residuals（残差的自由度）:

残差的自由度，表示用于估计残差的自由度数量。
Df Model（模型的自由度）:

模型的自由度，表示用于估计模型参数的自由度数量。
AIC (Akaike Information Criterion) and BIC (Bayesian Information Criterion):

信息准则，用于评估模型的拟合效果。AIC 和 BIC 越小，表示模型越好。这两个指标考虑了拟合的同时也考虑了模型的复杂性。
'''