from spacepy import pycdf


cdf_pycdf = pycdf.CDF('./wi_h2_mfi_20220101_v04.cdf')


format_time = cdf_pycdf['BF1'][...]
print(format_time)
print(cdf_pycdf.keys())