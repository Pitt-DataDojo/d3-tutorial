import pandas as pd
import datetime as dt
import numpy as np

arrests = pd.read_csv('arrest-data.csv')

arrests['ARRESTTIME'] = pd.to_datetime(arrests['ARRESTTIME'])

arrests2017 = arrests[arrests["ARRESTTIME"].dt.year == 2017]

counts = arrests2017["ARRESTTIME"].dt.hour.value_counts().sort_index()

print(counts.values)

# fig, ax = plt.subplots()
# ax.set(xlabel='Month', ylabel='Arrests', title='Arrests Per Month 2017')
# ax.grid()

# ax.bar(np.array(counts.axes)[0], counts.values, align='edge', bottom=0)
# ax.set_ylim(ymin=0)
# plt.savefig("chart")