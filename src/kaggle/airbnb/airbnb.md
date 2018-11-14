distance destination


Missing adta in age and another column : either remove the collumns or fill them
Take care that data changes as we approach today, so should we only consider only new data for tests or focus more on it?
If the model is not sensitive enough, the predictions would fall into two categories (NDF and US)

Note that the more age pass, the more user accounts are created

First device type changes with time. Iphone and Windows are gaining shares.


## Cleaning data
### Convert date to an appropriate format
### Deal with missing values
#### Filling in the values  
* For categorical data: add a new category called "unknown" for example
* For numerical data: there is an infinite number of approaches. Here are some of them
    * compute the median or mean
    * the median or mean 
### Correcting erroneous values
* Ages are not recorded properly. A lot set their date as age and others set wrong ages like 100+

### Convert categorical data to another form
###Standardizing categories
Make sure there is only one version for US (not US and United States)

### Action

#### Dropping unneded columns
We should drop **date_first_booking** since it is already empty for those who did not reserve any booking and would not help us predict the destination of the first booking. If we kept this column, what will happen is that the model would predict "Undefined" destination more often.

#### Converting missing data
* Convert age outliers to -1
* Convert first_affiliate_tracked missing values to -1

## Data Transformation
### Methods
#### Bucketing/Binning
Convert noisy numerical data to categorical data
#### Statistical Normalization
Convert numerical values to numbers from -1 to 1. ) is the mean. 1 is one standard deviation far from the mean.For some algorithms – like the one we will be using – this type of transformation is not typically necessary. For others, it is necessary.
## Feature Extraction


## Adding new data
* Group data from sessions.csv by user and insert it to training data
* Count the number of actions per user  
