# aws

###  EC2
**Amazon Elastic Compute Cloud** (**EC2**) is a part of [Amazon.com](https://en.wikipedia.org/wiki/Amazon.com "Amazon.com")'s [cloud-computing](https://en.wikipedia.org/wiki/Cloud-computing "Cloud-computing") platform, [Amazon Web Services](https://en.wikipedia.org/wiki/Amazon_Web_Services "Amazon Web Services") (AWS), that allows users to rent [virtual computers](https://en.wikipedia.org/wiki/Virtual_computer "Virtual computer") on which to run their own computer applications.

 - EC2 encourages scalable deployment of applications by providing a [web service](https://en.wikipedia.org/wiki/Web_service "Web service") through which a user can boot an [Amazon Machine Image](https://en.wikipedia.org/wiki/Amazon_Machine_Image "Amazon Machine Image") (AMI) to configure a [virtual machine](https://en.wikipedia.org/wiki/Virtual_Machine "Virtual Machine"), which Amazon calls an "instance",containing any software desired.


important what is EC2 
 https://www.geeksforgeeks.org/what-is-elastic-compute-cloud-ec2/


Top 100+ AWS Interview Questions and Answers for 2023

Basic AWS Interview Questions
1. Define and explain the three basic types of cloud services and the AWS products that are built based on them?
The three basic types of cloud services are:

Computing
Storage
Networking
Here are some of the AWS products that are built based on the three cloud service types:

Computing - These include EC2, Elastic Beanstalk, Lambda, Auto-Scaling, and Lightsat.

Storage - These include S3, Glacier, Elastic Block Storage, Elastic File System.

Networking - These include VPC, Amazon CloudFront, Route53

2. What is the relation between the Availability Zone and Region?
AWS regions are separate geographical areas, like the US-West 1 (North California) and Asia South (Mumbai). On the other hand, availability zones are the areas that are present inside the regions. These are generally isolated zones that can replicate themselves whenever required.

aws region

3. What is auto-scaling?
Auto-scaling is a function that allows you to provision and launch new instances whenever there is a demand. It allows you to automatically increase or decrease resource capacity in relation to the demand.

Interested in becoming a cloud architect? Join our Cloud Architect Master’s Program and learn AWS, Microsoft Azure, and Google Cloud Platform from the ground up!

4. What is geo-targeting in CloudFront?
Geo-Targeting is a concept where businesses can show personalized content to their audience based on their geographic location without changing the URL. This helps you create customized content for the audience of a specific geographical area, keeping their needs in the forefront.

5. What are the steps involved in a CloudFormation Solution?
Here are the steps involved in a CloudFormation solution:

cloud formation

Create or use an existing CloudFormation template using JSON or YAML format.
Save the code in an S3 bucket, which serves as a repository for the code.
Use AWS CloudFormation to call the bucket and create a stack on your template. 
CloudFormation reads the file and understands the services that are called, their order, the relationship between the services, and provisions the services one after the other.


6. How do you upgrade or downgrade a system with near-zero downtime?
You can upgrade or downgrade a system with near-zero downtime using the following steps of migration:

Open EC2 console
Choose Operating System AMI
Launch an instance with the new instance type
Install all the updates
Install applications
Test the instance to see if it’s working
If working, deploy the new instance and replace the older instance
Once it’s deployed, you can upgrade or downgrade the system with near-zero downtime.
Take home these interview Q&As and get much more. Download the complete AWS Interview Guide here:
