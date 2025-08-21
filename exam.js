const linuxQuestions = {
  // ---------------- LEVEL 1 ----------------
  1: [
    { q:"Which command lists files in a directory?", options:["ls","pwd","cd","cat"], answer:"ls" },
    { q:"Which command shows the current working directory?", options:["pwd","ls","whoami","echo"], answer:"pwd" },
    { q:"Which command is used to change directory?", options:["cd","pwd","ls","mv"], answer:"cd" },
    { q:"Which file contains user account details in Linux?", options:["/etc/passwd","/etc/shadow","/etc/group","/etc/hosts"], answer:"/etc/passwd" },
    { q:"Which command displays contents of a file?", options:["cat","ls","pwd","rm"], answer:"cat" },
    { q:"Which command shows disk usage in Linux?", options:["df","du","ls","top"], answer:"df" },
    { q:"Which command is used to remove files?", options:["rm","delete","erase","clear"], answer:"rm" },
    { q:"Which command shows running processes?", options:["ps","jobs","run","exec"], answer:"ps" },
    { q:"Which directory stores user home directories?", options:["/home","/root","/etc","/var"], answer:"/home" },
    { q:"Which command is used to search text in files?", options:["grep","find","locate","which"], answer:"grep" }
  ],

  // ---------------- LEVEL 2 ----------------
  2: [
    { q:"Which command is used to create a new directory?", options:["mkdir","rmdir","touch","mkfile"], answer:"mkdir" },
    { q:"Which command is used to delete a directory?", options:["rmdir","rm -r","delete","dir"], answer:"rmdir" },
    { q:"Which command shows file permissions?", options:["ls -l","chmod","chown","pwd"], answer:"ls -l" },
    { q:"What does ‘chmod 755 file’ do?", options:["Gives rwxr-xr-x","Deletes file","Changes owner","Compresses file"], answer:"Gives rwxr-xr-x" },
    { q:"Which symbol represents the home directory?", options:["~","/","..","."] , answer:"~" },
    { q:"Which command shows last 10 lines of a file?", options:["tail","head","less","more"], answer:"tail" },
    { q:"Which command shows first 10 lines of a file?", options:["head","tail","less","more"], answer:"head" },
    { q:"Which command is used to copy files?", options:["cp","mv","copy","scp"], answer:"cp" },
    { q:"Which command moves/renames files?", options:["mv","cp","rename","cut"], answer:"mv" },
    { q:"Which command clears the terminal screen?", options:["clear","reset","cls","erase"], answer:"clear" }
  ],

  // ---------------- LEVEL 3 ----------------
  3: [
    { q:"Which command shows manual pages?", options:["man","help","info","doc"], answer:"man" },
    { q:"Which command finds files by name?", options:["find","locate","whereis","which"], answer:"find" },
    { q:"Which command quickly finds files using DB?", options:["locate","find","grep","search"], answer:"locate" },
    { q:"Which command shows system uptime?", options:["uptime","top","who","w"], answer:"uptime" },
    { q:"Which command shows logged-in users?", options:["who","w","users","login"], answer:"who" },
    { q:"Which command shows kernel version?", options:["uname -r","lsb_release -a","version","sysctl"], answer:"uname -r" },
    { q:"Which file contains hostname?", options:["/etc/hostname","/etc/hosts","/etc/passwd","/etc/profile"], answer:"/etc/hostname" },
    { q:"Which command shows network interfaces?", options:["ifconfig","ip addr","netstat","ping"], answer:"ifconfig" },
    { q:"Which command checks connectivity?", options:["ping","curl","wget","ssh"], answer:"ping" },
    { q:"Which command shows memory usage?", options:["free","df","du","ps"], answer:"free" }
  ],

  // ---------------- LEVEL 4 ----------------
  4: [
    { q:"Which directory contains configuration files?", options:["/etc","/bin","/usr","/opt"], answer:"/etc" },
    { q:"Which directory contains log files?", options:["/var/log","/etc/log","/usr/logs","/log"], answer:"/var/log" },
    { q:"Which command shows system logs?", options:["dmesg","journalctl","tail /var/log/syslog","all of the above"], answer:"all of the above" },
    { q:"Which command shows CPU info?", options:["lscpu","cat /proc/cpuinfo","top","all of the above"], answer:"all of the above" },
    { q:"Which directory contains binaries?", options:["/bin","/usr/bin","/sbin","all of the above"], answer:"all of the above" },
    { q:"Which command compresses files?", options:["gzip","tar","zip","all of the above"], answer:"all of the above" },
    { q:"Which command extracts .tar.gz files?", options:["tar -xvzf","unzip","gunzip","zip -x"], answer:"tar -xvzf" },
    { q:"Which command shows file type?", options:["file","ls -l","stat","cat"], answer:"file" },
    { q:"Which command shows active TCP connections?", options:["netstat -tuln","ss -tuln","lsof -i","all of the above"], answer:"all of the above" },
    { q:"Which file contains environment variables?", options:["/etc/profile","~/.bashrc","/etc/environment","all of the above"], answer:"all of the above" }
  ],

  // ---------------- LEVEL 5 ----------------
  5: [
    { q:"Which command archives files?", options:["tar","zip","gzip","rar"], answer:"tar" },
    { q:"Which command extracts zip files?", options:["unzip","tar -xvf","gzip -d","extract"], answer:"unzip" },
    { q:"Which command counts words in a file?", options:["wc","count","grep -c","awk"], answer:"wc" },
    { q:"Which command sorts lines?", options:["sort","order","arrange","awk"], answer:"sort" },
    { q:"Which command removes duplicates?", options:["uniq","sort -u","awk '!seen[$0]++'","all of the above"], answer:"all of the above" },
    { q:"Which command displays line numbers?", options:["nl","cat -n","awk '{print NR,$0}'","all of the above"], answer:"all of the above" },
    { q:"Which command shows calendar?", options:["cal","date","time","clock"], answer:"cal" },
    { q:"Which command shows date & time?", options:["date","time","clock","cal"], answer:"date" },
    { q:"Which command shows system load?", options:["uptime","top","htop","all of the above"], answer:"all of the above" },
    { q:"Which file stores DNS info?", options:["/etc/resolv.conf","/etc/hosts","/etc/network/interfaces","/etc/sysconfig/network"], answer:"/etc/resolv.conf" }
  ],

  // ---------------- LEVEL 6 ----------------
  6: [
    { q:"Which command switches user?", options:["su","sudo","login","switch"], answer:"su" },
    { q:"Which command executes as root?", options:["sudo","su","admin","root"], answer:"sudo" },
    { q:"Which command changes password?", options:["passwd","chpasswd","resetpw","setpass"], answer:"passwd" },
    { q:"Which file stores encrypted passwords?", options:["/etc/shadow","/etc/passwd","/etc/login","/etc/auth"], answer:"/etc/shadow" },
    { q:"Which command adds user?", options:["useradd","adduser","usermod","all of the above"], answer:"all of the above" },
    { q:"Which command deletes user?", options:["userdel","deluser","removeuser","rmuser"], answer:"userdel" },
    { q:"Which command adds group?", options:["groupadd","addgroup","mkgroup","grpadd"], answer:"groupadd" },
    { q:"Which command changes file ownership?", options:["chown","chmod","chgrp","own"], answer:"chown" },
    { q:"Which command changes group ownership?", options:["chgrp","chown :group","groupmod","grpown"], answer:"chgrp" },
    { q:"Which command shows login history?", options:["last","history","who","w"], answer:"last" }
  ],

  // ---------------- LEVEL 7 ----------------
  7: [
    { q:"Which command shows command history?", options:["history","last","bashrc","commands"], answer:"history" },
    { q:"Which key searches history in bash?", options:["Ctrl+R","Ctrl+S","Ctrl+F","Ctrl+E"], answer:"Ctrl+R" },
    { q:"Which file stores bash history?", options:["~/.bash_history","/etc/history","/etc/bashrc","/history"], answer:"~/.bash_history" },
    { q:"Which command re-runs last command?", options:["!!","!-1","!$", "repeat"], answer:"!!" },
    { q:"Which command prints last argument?", options:["!$","!!","!^","!-1"], answer:"!$" },
    { q:"Which command executes nth command from history?", options:["!n","!!n","!-n","history -n"], answer:"!n" },
    { q:"Which command logs out?", options:["exit","logout","Ctrl+D","all of the above"], answer:"all of the above" },
    { q:"Which command schedules jobs?", options:["cron","at","systemd-timers","all of the above"], answer:"all of the above" },
    { q:"Which command lists cron jobs?", options:["crontab -l","cron -l","jobs","ps -ef"], answer:"crontab -l" },
    { q:"Which directory stores cron jobs?", options:["/etc/cron.d","/etc/cron.daily","/etc/crontab","all of the above"], answer:"all of the above" }
  ],

  // ---------------- LEVEL 8 ----------------
  8: [
    { q:"Which command monitors logs in real-time?", options:["tail -f","less","watch","log"], answer:"tail -f" },
    { q:"Which command shows running services?", options:["systemctl list-units","service --status-all","chkconfig --list","all of the above"], answer:"all of the above" },
    { q:"Which command starts a service?", options:["systemctl start","service start","/etc/init.d/service start","all of the above"], answer:"all of the above" },
    { q:"Which command stops a service?", options:["systemctl stop","service stop","kill","all of the above"], answer:"all of the above" },
    { q:"Which command restarts a service?", options:["systemctl restart","service restart","kill -HUP","all of the above"], answer:"all of the above" },
    { q:"Which command enables a service at boot?", options:["systemctl enable","chkconfig on","update-rc.d","all of the above"], answer:"all of the above" },
    { q:"Which command disables a service at boot?", options:["systemctl disable","chkconfig off","update-rc.d -f remove","all of the above"], answer:"all of the above" },
    { q:"Which command checks firewall rules?", options:["iptables -L","ufw status","firewall-cmd --list-all","all of the above"], answer:"all of the above" },
    { q:"Which command adds firewall rule?", options:["iptables -A","ufw allow","firewall-cmd --add-service","all of the above"], answer:"all of the above" },
    { q:"Which file contains sudoers?", options:["/etc/sudoers","/etc/sudo.conf","/etc/sudo.d","/etc/admin"], answer:"/etc/sudoers" }
  ],

  // ---------------- LEVEL 9 ----------------
  9: [
    { q:"Which command shows disk partitions?", options:["fdisk -l","lsblk","parted -l","all of the above"], answer:"all of the above" },
    { q:"Which command shows mounted filesystems?", options:["mount","df -h","lsblk","all of the above"], answer:"all of the above" },
    { q:"Which file contains mount points?", options:["/etc/fstab","/etc/mounts","/etc/mtab","/etc/disk"], answer:"/etc/fstab" },
    { q:"Which command mounts a filesystem?", options:["mount","umount","attach","disk"], answer:"mount" },
    { q:"Which command unmounts filesystem?", options:["umount","unmount","detach","disk -u"], answer:"umount" },
    { q:"Which command checks filesystem errors?", options:["fsck","chkdsk","diskcheck","verify"], answer:"fsck" },
    { q:"Which command formats a disk?", options:["mkfs","format","disk -f","initdisk"], answer:"mkfs" },
    { q:"Which command shows inode usage?", options:["df -i","ls -i","stat","du -i"], answer:"df -i" },
    { q:"Which command shows swap usage?", options:["free -m","swapon -s","cat /proc/swaps","all of the above"], answer:"all of the above" },
    { q:"Which command enables swap?", options:["swapon","mkswap","swapctl","addswap"], answer:"swapon" }
  ],

  // ---------------- LEVEL 10 ----------------
  10: [
    { q:"Which command compresses using bzip2?", options:["bzip2","bunzip2","bzcat","all of the above"], answer:"bzip2" },
    { q:"Which command extracts bzip2 files?", options:["bunzip2","bzip2 -d","tar -xvjf","all of the above"], answer:"all of the above" },
    { q:"Which command compresses using xz?", options:["xz","unxz","xzcat","all of the above"], answer:"xz" },
    { q:"Which command extracts xz files?", options:["unxz","xz -d","tar -xvJf","all of the above"], answer:"all of the above" },
    { q:"Which command shows SELinux status?", options:["getenforce","sestatus","cat /etc/selinux/config","all of the above"], answer:"all of the above" },
    { q:"Which command disables SELinux temporarily?", options:["setenforce 0","selinuxoff","getenforce off","systemctl stop selinux"], answer:"setenforce 0" },
    { q:"Which command enables SELinux temporarily?", options:["setenforce 1","getenforce on","selinuxon","systemctl start selinux"], answer:"setenforce 1" },
    { q:"Which command shows active users?", options:["w","who","users","all of the above"], answer:"all of the above" },
    { q:"Which command shows open files?", options:["lsof","fuser","stat","all of the above"], answer:"all of the above" },
    { q:"Which command kills a process?", options:["kill","pkill","killall","all of the above"], answer:"all of the above" }
  ],

  // AWS Basics (Levels 11–20, 100 questions total)
// Each level contains exactly 10 MCQs with 4 options and one correct answer.
// Use: import/attach this object to your quiz app like linuxQuestions.

  // ---------------- LEVEL 11 ----------------
  11: [
    { q: "Which AWS service provides virtual servers?", options: ["S3", "EC2", "Lambda", "RDS"], answer: "EC2" },
    { q: "Which service is object storage?", options: ["EFS", "S3", "EBS", "FSx"], answer: "S3" },
    { q: "What does VPC stand for?", options: ["Virtual Private Cloud", "Virtual Public Cloud", "Verified Private Compute", "Virtual Packet Cluster"], answer: "Virtual Private Cloud" },
    { q: "Serverless compute service?", options: ["EC2", "Lambda", "ECS", "Batch"], answer: "Lambda" },
    { q: "Managed relational databases?", options: ["DynamoDB", "RDS", "Redshift", "Neptune"], answer: "RDS" },
    { q: "Global DNS service?", options: ["CloudFront", "Route 53", "Global Accelerator", "Direct Connect"], answer: "Route 53" },
    { q: "CDN service?", options: ["CloudFront", "API Gateway", "Elastic Beanstalk", "SQS"], answer: "CloudFront" },
    { q: "Identity and access control?", options: ["ACM", "IAM", "KMS", "Shield"], answer: "IAM" },
    { q: "Monitoring metrics and logs?", options: ["CloudTrail", "CloudWatch", "Config", "Inspector"], answer: "CloudWatch" },
    { q: "Audit API activity?", options: ["CloudTrail", "Config", "GuardDuty", "Inspector"], answer: "CloudTrail" }
  ],

  // ---------------- LEVEL 12 ----------------
  12: [
    { q: "Fully managed NoSQL key-value database?", options: ["Aurora", "DynamoDB", "RDS", "ElastiCache"], answer: "DynamoDB" },
    { q: "Data warehousing service?", options: ["Redshift", "RDS", "Athena", "EMR"], answer: "Redshift" },
    { q: "Which is block storage for EC2?", options: ["S3", "EBS", "EFS", "FSx"], answer: "EBS" },
    { q: "Which is shared file storage for Linux EC2?", options: ["EBS", "EFS", "S3", "Glacier"], answer: "EFS" },
    { q: "Run containers on AWS without managing servers?", options: ["ECS on Fargate", "EC2", "Batch", "Beanstalk"], answer: "ECS on Fargate" },
    { q: "Managed Kubernetes service?", options: ["EKS", "ECS", "Fargate", "App Runner"], answer: "EKS" },
    { q: "Simple queue service?", options: ["SNS", "SQS", "MQ", "EventBridge"], answer: "SQS" },
    { q: "Pub/Sub notification service?", options: ["SQS", "SNS", "EventBridge", "Kinesis"], answer: "SNS" },
    { q: "Pay-as-you-go query S3 with SQL?", options: ["Athena", "EMR", "Glue", "Redshift"], answer: "Athena" },
    { q: "Service to create and manage APIs?", options: ["AppSync", "API Gateway", "Lambda", "Cognito"], answer: "API Gateway" }
  ],

  // ---------------- LEVEL 13 ----------------
  13: [
    { q: "Which feature distributes traffic to multiple targets?", options: ["Auto Scaling", "Elastic Load Balancing", "Route 53", "ALB WAF"], answer: "Elastic Load Balancing" },
    { q: "Layer 7 load balancer?", options: ["NLB", "ALB", "CLB", "GWLB"], answer: "ALB" },
    { q: "Layer 4 TCP load balancer?", options: ["ALB", "NLB", "CLB", "GWLB"], answer: "NLB" },
    { q: "Automatically add/remove EC2 based on demand?", options: ["Auto Scaling", "CloudWatch", "Systems Manager", "Beastalk"], answer: "Auto Scaling" },
    { q: "Which connects VPC to the internet?", options: ["IGW", "NAT Gateway", "VPC Endpoint", "Transit Gateway"], answer: "IGW" },
    { q: "Allow private subnets to reach internet?", options: ["IGW", "NAT Gateway", "Peering", "VPN"], answer: "NAT Gateway" },
    { q: "Stateless subnet firewall?", options: ["Security Group", "NACL", "WAF", "Shield"], answer: "NACL" },
    { q: "Stateful instance-level firewall?", options: ["NACL", "Security Group", "WAF", "GuardDuty"], answer: "Security Group" },
    { q: "Connect VPCs across accounts/regions?", options: ["VPC Peering", "Direct Connect", "Gateway Endpoint", "PrivateLink"], answer: "VPC Peering" },
    { q: "Private access to S3/DynamoDB from VPC?", options: ["NAT", "Gateway Endpoint", "Interface Endpoint", "IGW"], answer: "Gateway Endpoint" }
  ],

  // ---------------- LEVEL 14 ----------------
  14: [
    { q: "Which S3 storage class is lowest cost for rarely accessed with milliseconds access?", options: ["Standard-IA", "One Zone-IA", "Glacier Instant Retrieval", "Glacier Deep Archive"], answer: "Glacier Instant Retrieval" },
    { q: "S3 feature to keep multiple versions?", options: ["Replication", "Versioning", "Lifecycle", "Encryption"], answer: "Versioning" },
    { q: "Encrypt S3 objects with keys managed by AWS?", options: ["SSE-S3", "SSE-KMS", "SSE-C", "Client-side"], answer: "SSE-S3" },
    { q: "Which service manages encryption keys?", options: ["KMS", "IAM", "Shield", "ACM"], answer: "KMS" },
    { q: "Edge caching of static content?", options: ["CloudFront", "Global Accelerator", "Route 53", "ELB"], answer: "CloudFront" },
    { q: "S3 static website requires what setting?", options: ["Public bucket", "Static website hosting", "MFA delete", "Requester pays"], answer: "Static website hosting" },
    { q: "Move objects between storage classes automatically?", options: ["Lifecycle rules", "Replication", "Inventory", "EventBridge"], answer: "Lifecycle rules" },
    { q: "Query data in S3 without moving?", options: ["Athena", "Glue", "Redshift", "EMR"], answer: "Athena" },
    { q: "Global accelerator improves what?", options: ["Availability & latency", "Storage cost", "Compute price", "Database capacity"], answer: "Availability & latency" },
    { q: "Upload a 15GB file to S3 requires?", options: ["Single PUT", "Multipart upload", "S3 Batch", "Transfer Acceleration only"], answer: "Multipart upload" }
  ],

  // ---------------- LEVEL 15 ----------------
  15: [
    { q: "Which is a fully managed MySQL/PostgreSQL compatible DB?", options: ["Aurora", "DynamoDB", "Redshift", "Neptune"], answer: "Aurora" },
    { q: "RDS Multi-AZ primarily provides?", options: ["Read scaling", "High availability", "Write sharding", "Lower cost"], answer: "High availability" },
    { q: "RDS Read Replicas primarily provide?", options: ["Backups", "Disaster recovery", "Read scaling", "Encryption"], answer: "Read scaling" },
    { q: "Which service discovers resources and records config changes?", options: ["Config", "CloudTrail", "CloudWatch", "Inspector"], answer: "Config" },
    { q: "Which service continuously monitors for threats?", options: ["GuardDuty", "Inspector", "Macie", "Shield"], answer: "GuardDuty" },
    { q: "Service for secrets rotation and retrieval?", options: ["Secrets Manager", "SSM Parameter Store", "KMS", "Cognito"], answer: "Secrets Manager" },
    { q: "Cost visualization and analysis?", options: ["Cost Explorer", "Budgets", "Trusted Advisor", "Billing Console"], answer: "Cost Explorer" },
    { q: "Set alerts on cost thresholds?", options: ["Budgets", "Cost Explorer", "CloudWatch", "Config"], answer: "Budgets" },
    { q: "Fast in-memory data store?", options: ["ElastiCache", "DynamoDB", "RDS", "OpenSearch"], answer: "ElastiCache" },
    { q: "Analyze and search logs at scale?", options: ["OpenSearch Service", "CloudWatch Metrics", "Artifact", "Athena"], answer: "OpenSearch Service" }
  ],

  // ---------------- LEVEL 16 ----------------
  16: [
    { q: "Choose cheaper long-term EC2 pricing with commitment?", options: ["On-Demand", "Savings Plans", "Spot", "Dedicated Hosts"], answer: "Savings Plans" },
    { q: "Which EC2 purchasing option uses spare capacity with interruptions?", options: ["Reserved", "Spot", "On-Demand", "Savings Plans"], answer: "Spot" },
    { q: "AMI stands for?", options: ["Amazon Machine Image", "AWS Machine Instance", "Amazon Managed Instance", "AMI Machine Interface"], answer: "Amazon Machine Image" },
    { q: "User data runs when?", options: ["On every reboot", "On first boot by default", "On schedule", "Never automatically"], answer: "On first boot by default" },
    { q: "Instance metadata is accessed at?", options: ["169.254.169.254", "127.0.0.1", "Metadata endpoint URL", "Route 53"], answer: "169.254.169.254" },
    { q: "Placement group for low-latency within AZ?", options: ["Cluster", "Spread", "Partition", "Multi-AZ"], answer: "Cluster" },
    { q: "EBS SSD general purpose type?", options: ["gp3", "io2", "st1", "sc1"], answer: "gp3" },
    { q: "Encrypt EBS volumes with?", options: ["KMS", "ACM", "IAM", "SSM"], answer: "KMS" },
    { q: "Autoscaling needs which component to scale on metrics?", options: ["CloudTrail", "CloudWatch alarms", "Inspector", "Config"], answer: "CloudWatch alarms" },
    { q: "Network file system for Windows workloads?", options: ["FSx for Windows", "EFS", "S3", "EBS"], answer: "FSx for Windows" }
  ],

  // ---------------- LEVEL 17 ----------------
  17: [
    { q: "Which service orchestrates serverless workflows visually?", options: ["EventBridge", "Step Functions", "SWF", "Glue"], answer: "Step Functions" },
    { q: "Event bus for app integration?", options: ["SNS", "EventBridge", "SQS", "Kinesis"], answer: "EventBridge" },
    { q: "Define infra as code templates in JSON/YAML?", options: ["CloudFormation", "CDK", "SAM", "Config"], answer: "CloudFormation" },
    { q: "Which service simplifies app deployment with managed envs?", options: ["Elastic Beanstalk", "OpsWorks", "App Runner", "CodeDeploy"], answer: "Elastic Beanstalk" },
    { q: "Fully managed build service?", options: ["CodeBuild", "CodeCommit", "CodePipeline", "CodeDeploy"], answer: "CodeBuild" },
    { q: "Managed Git repositories?", options: ["CodeCommit", "GitHub", "CodePipeline", "ECR"], answer: "CodeCommit" },
    { q: "End-to-end CI/CD orchestration?", options: ["CodePipeline", "CodeBuild", "CodeDeploy", "Beanstalk"], answer: "CodePipeline" },
    { q: "Deploy application revisions to EC2/Lambda/ECS?", options: ["CodeDeploy", "Beanstalk", "CodeBuild", "OpsWorks"], answer: "CodeDeploy" },
    { q: "Store and version container images?", options: ["ECR", "ECS", "EKS", "App Runner"], answer: "ECR" },
    { q: "Run web containers from source without managing infra?", options: ["App Runner", "Beanstalk", "LightSail", "Batch"], answer: "App Runner" }
  ],

  // ---------------- LEVEL 18 ----------------
  18: [
    { q: "Service for WAF rules at the edge?", options: ["Shield", "WAF", "Security Groups", "NACL"], answer: "WAF" },
    { q: "Managed DDoS protection?", options: ["Shield", "GuardDuty", "Inspector", "Macie"], answer: "Shield" },
    { q: "Service that classifies sensitive data in S3?", options: ["Macie", "Inspector", "GuardDuty", "Detective"], answer: "Macie" },
    { q: "Vulnerability management for EC2/ECR?", options: ["Inspector", "Config", "CloudTrail", "Trusted Advisor"], answer: "Inspector" },
    { q: "Centrally manage multiple AWS accounts?", options: ["Organizations", "Control Tower", "IAM", "STS"], answer: "Organizations" },
    { q: "Prescriptive multi-account setup?", options: ["Control Tower", "Organizations", "Landing Zone (old)", "Trusted Advisor"], answer: "Control Tower" },
    { q: "Temporary credentials across accounts?", options: ["STS", "IAM", "KMS", "Cognito"], answer: "STS" },
    { q: "Issue and manage SSL/TLS certs?", options: ["ACM", "KMS", "IAM", "Certificate Manager Private CA"], answer: "ACM" },
    { q: "Central place to download compliance reports?", options: ["Artifact", "Trust Center", "Inspector", "License Manager"], answer: "Artifact" },
    { q: "Enable S3 access logging and analyze?", options: ["CloudTrail", "S3 server access logs + Athena", "Config", "Inspector"], answer: "S3 server access logs + Athena" }
  ],

  // ---------------- LEVEL 19 ----------------
  19: [
    { q: "Which Route 53 routing policy sends traffic to lowest latency region?", options: ["Weighted", "Latency", "Geolocation", "Failover"], answer: "Latency" },
    { q: "Which policy splits traffic by proportions?", options: ["Weighted", "Latency", "Geoproximity", "Multivalue"], answer: "Weighted" },
    { q: "Which ELB supports WebSockets & HTTP/2?", options: ["ALB", "NLB", "CLB", "GWLB"], answer: "ALB" },
    { q: "Best ELB for extreme performance TCP?", options: ["ALB", "NLB", "CLB", "GWLB"], answer: "NLB" },
    { q: "S3 feature to block public access at account level?", options: ["Bucket Policy", "Block Public Access", "ACLs", "IAM"], answer: "Block Public Access" },
    { q: "DynamoDB provisioned capacity auto adjusts with?", options: ["Auto Scaling", "Streams", "TTL", "DAX"], answer: "Auto Scaling" },
    { q: "DynamoDB in-memory cache?", options: ["DAX", "ElastiCache", "CloudFront", "Aurora Cache"], answer: "DAX" },
    { q: "RDS automatic backups retention max (typical default limit)?", options: ["7 days", "35 days", "90 days", "Unlimited"], answer: "35 days" },
    { q: "Which improves global app performance using Anycast IPs?", options: ["Global Accelerator", "CloudFront", "Route 53", "Direct Connect"], answer: "Global Accelerator" },
    { q: "Which service moves petabyte-scale data offline?", options: ["Snowball", "DataSync", "DMS", "Direct Connect"], answer: "Snowball" }
  ],

  // ---------------- LEVEL 20 ----------------
  20: [
    { q: "S3 Transfer Acceleration speeds up uploads using?", options: ["Edge locations", "Bigger EC2", "Direct Connect", "NAT Gateway"], answer: "Edge locations" },
    { q: "Connect on-prem to AWS over private network?", options: ["Site-to-Site VPN", "Direct Connect", "Client VPN", "Transit Gateway"], answer: "Direct Connect" },
    { q: "Multi-account log archival & security account pattern is called?", options: ["Landing Zone", "Control Tower", "Organizations", "Multi-AZ"], answer: "Landing Zone" },
    { q: "Which is fully managed ETL service?", options: ["Glue", "Athena", "EMR", "DataSync"], answer: "Glue" },
    { q: "Which service streams real-time data ingestion?", options: ["Kinesis Data Streams", "SQS", "SNS", "EMR"], answer: "Kinesis Data Streams" },
    { q: "Which feature allows signed temporary S3 access URLs?", options: ["Pre-signed URL", "S3 Access Points", "S3 ACL", "Requester Pays"], answer: "Pre-signed URL" },
    { q: "Service to migrate databases with minimal downtime?", options: ["DMS", "SMS", "DataSync", "Snowball"], answer: "DMS" },
    { q: "Which service gives best practice checks?", options: ["Trusted Advisor", "Inspector", "Config", "GuardDuty"], answer: "Trusted Advisor" },
    { q: "Which service provides managed Apache Spark/Hadoop?", options: ["EMR", "Glue", "Athena", "Redshift"], answer: "EMR" },
    { q: "Archive storage at the lowest cost?", options: ["Glacier Deep Archive", "Glacier Instant Retrieval", "Standard-IA", "One Zone-IA"], answer: "Glacier Deep Archive" }
  ],

  
  21: [
    { q: "What is Jenkins primarily used for?", options: ["Continuous Integration", "Cloud Hosting", "Container Orchestration", "Monitoring"], answer: "Continuous Integration" },
    { q: "Which file format is commonly used to define Jenkins pipelines?", options: ["Jenkinsfile", "pipeline.json", "build.xml", "pipeline.yaml"], answer: "Jenkinsfile" },
    { q: "Jenkins plugins are written in which language?", options: ["Python", "Java", "Go", "Ruby"], answer: "Java" },
    { q: "Which command installs Jenkins on Ubuntu?", options: ["apt install jenkins", "yum install jenkins", "brew install jenkins", "docker run jenkins"], answer: "apt install jenkins" },
    { q: "Jenkins master-slave architecture is used for?", options: ["Load balancing builds", "Database replication", "Container orchestration", "Source code management"], answer: "Load balancing builds" },
    { q: "Which Jenkins plugin integrates with GitHub?", options: ["Git Plugin", "Docker Plugin", "Terraform Plugin", "Pipeline Plugin"], answer: "Git Plugin" },
    { q: "In Jenkins, what does ‘freestyle project’ mean?", options: ["Basic job without pipeline", "Containerized job", "Script-only job", "Remote job"], answer: "Basic job without pipeline" },
    { q: "Jenkins pipelines can be defined using?", options: ["Groovy DSL", "Python scripts", "YAML only", "Shell scripts only"], answer: "Groovy DSL" },
    { q: "What is Jenkins Blue Ocean?", options: ["UI for Jenkins pipelines", "A monitoring tool", "Docker container", "Kubernetes cluster"], answer: "UI for Jenkins pipelines" },
    { q: "Which is NOT a Jenkins feature?", options: ["Build automation", "Continuous Delivery", "Virtual Machine provisioning", "Pipeline support"], answer: "Virtual Machine provisioning" }
  ],
  22: [
    { q: "Which company originally developed Docker?", options: ["Docker Inc.", "Google", "Red Hat", "Microsoft"], answer: "Docker Inc." },
    { q: "What is a Docker image?", options: ["Template for containers", "Running process", "Monitoring tool", "Cluster manager"], answer: "Template for containers" },
    { q: "Which command lists all Docker containers?", options: ["docker ps -a", "docker images", "docker run", "docker build"], answer: "docker ps -a" },
    { q: "Docker uses which kernel feature for isolation?", options: ["Namespaces", "Threads", "BIOS", "System calls"], answer: "Namespaces" },
    { q: "Docker Hub is?", options: ["Public registry for images", "Monitoring tool", "Container runtime", "Cloud provider"], answer: "Public registry for images" },
    { q: "Which command builds a Docker image?", options: ["docker build", "docker run", "docker exec", "docker save"], answer: "docker build" },
    { q: "Docker Compose files use which format?", options: ["YAML", "JSON", "XML", "INI"], answer: "YAML" },
    { q: "Default Docker bridge network is named?", options: ["bridge", "default", "eth0", "docker0"], answer: "bridge" },
    { q: "Which command removes a Docker image?", options: ["docker rmi", "docker rm", "docker stop", "docker kill"], answer: "docker rmi" },
    { q: "Docker Swarm is used for?", options: ["Container orchestration", "Monitoring", "CI/CD", "Code versioning"], answer: "Container orchestration" }
  ],
  23: [
    { q: "Terraform is developed by?", options: ["HashiCorp", "RedHat", "AWS", "Microsoft"], answer: "HashiCorp" },
    { q: "Terraform configuration files use which language?", options: ["HCL", "JSON", "YAML", "XML"], answer: "HCL" },
    { q: "Terraform state file is stored as?", options: ["terraform.tfstate", "state.json", "terraform.yaml", "tfconfig"], answer: "terraform.tfstate" },
    { q: "Terraform provider is?", options: ["Plugin to manage resources", "Monitoring agent", "Version control tool", "Container"], answer: "Plugin to manage resources" },
    { q: "Which command initializes Terraform?", options: ["terraform init", "terraform plan", "terraform apply", "terraform start"], answer: "terraform init" },
    { q: "Terraform plan command is used to?", options: ["Show execution plan", "Apply changes", "Rollback changes", "Initialize provider"], answer: "Show execution plan" },
    { q: "Which backend can store Terraform state remotely?", options: ["S3", "MySQL", "PostgreSQL", "MongoDB"], answer: "S3" },
    { q: "Terraform modules are?", options: ["Reusable configurations", "Monitoring scripts", "Docker containers", "Git branches"], answer: "Reusable configurations" },
    { q: "Which command destroys all Terraform-managed infrastructure?", options: ["terraform destroy", "terraform delete", "terraform reset", "terraform stop"], answer: "terraform destroy" },
    { q: "Terraform Cloud provides?", options: ["Remote execution & state mgmt", "CI/CD pipelines only", "Monitoring only", "Git hosting"], answer: "Remote execution & state mgmt" }
  ],
  24: [
    { q: "Ansible uses which language for playbooks?", options: ["YAML", "JSON", "XML", "Python"], answer: "YAML" },
    { q: "Ansible is written in?", options: ["Python", "Go", "Ruby", "C"], answer: "Python" },
    { q: "Which protocol does Ansible use to communicate with nodes?", options: ["SSH", "HTTP", "SNMP", "gRPC"], answer: "SSH" },
    { q: "Ansible Galaxy is?", options: ["Repository for roles", "Monitoring tool", "Docker registry", "Terraform backend"], answer: "Repository for roles" },
    { q: "Default inventory file for Ansible is?", options: ["/etc/ansible/hosts", "/etc/ansible/config", "/etc/hosts", "hosts.yaml"], answer: "/etc/ansible/hosts" },
    { q: "Which Ansible module manages packages on Debian?", options: ["apt", "yum", "dnf", "pkg"], answer: "apt" },
    { q: "Ansible roles are used for?", options: ["Reusable automation code", "Container orchestration", "Networking only", "Monitoring"], answer: "Reusable automation code" },
    { q: "Which command runs an Ansible playbook?", options: ["ansible-playbook", "ansible-run", "ansible-exec", "ansible-script"], answer: "ansible-playbook" },
    { q: "Ansible Tower provides?", options: ["Web UI & RBAC", "Container orchestration", "CI/CD", "Terraform automation"], answer: "Web UI & RBAC" },
    { q: "Which format does Ansible inventory NOT support?", options: ["CSV", "INI", "YAML", "Dynamic scripts"], answer: "CSV" }
  ],
  // Levels 25–30 → Mix of Jenkins, Docker, Terraform, Ansible (more advanced)
  25: [
    { q: "In Jenkins, which plugin enables Docker integration?", options: ["Docker Pipeline", "Git Plugin", "Blue Ocean", "Kubernetes"], answer: "Docker Pipeline" },
    { q: "Which Docker command starts an interactive container?", options: ["docker run -it", "docker build", "docker exec", "docker ps"], answer: "docker run -it" },
    { q: "Terraform supports which workflow?", options: ["Init → Plan → Apply", "Build → Deploy → Monitor", "Commit → Merge → Push", "Test → Release → Monitor"], answer: "Init → Plan → Apply" },
    { q: "Ansible ad-hoc command to ping all hosts?", options: ["ansible all -m ping", "ansible ping all", "ping ansible all", "ansible-playbook ping"], answer: "ansible all -m ping" },
    { q: "Which Jenkins concept defines pipeline stages?", options: ["Stages", "Jobs", "Nodes", "Views"], answer: "Stages" },
    { q: "Docker default storage driver is?", options: ["overlay2", "aufs", "zfs", "btrfs"], answer: "overlay2" },
    { q: "Terraform uses which workflow type?", options: ["Declarative", "Imperative", "Procedural", "Object-oriented"], answer: "Declarative" },
    { q: "Which Ansible module copies files?", options: ["copy", "file", "scp", "move"], answer: "copy" },
    { q: "Jenkins can be extended using?", options: ["Plugins", "Branches", "Forks", "Commits"], answer: "Plugins" },
    { q: "Docker volume is used for?", options: ["Persistent storage", "Networking", "Monitoring", "Orchestration"], answer: "Persistent storage" }
  ],
  // continue similarly for levels 26–30 (more advanced Qs)




  26: [
    { q: "Git was created by?", options: ["Linus Torvalds", "Bill Gates", "Guido van Rossum", "Dennis Ritchie"], answer: "Linus Torvalds" },
    { q: "Which command initializes a new Git repository?", options: ["git init", "git start", "git create", "git repo"], answer: "git init" },
    { q: "Which file tells Git to ignore specific files?", options: [".gitignore", ".gitconfig", "ignore.txt", "exclude.conf"], answer: ".gitignore" },
    { q: "Which command stages files for commit?", options: ["git add", "git push", "git commit", "git stage"], answer: "git add" },
    { q: "Git default branch name is?", options: ["main", "master", "develop", "release"], answer: "main" },
    { q: "Which command shows commit history?", options: ["git log", "git show", "git history", "git status"], answer: "git log" },
    { q: "Which command is used to clone a repository?", options: ["git clone", "git copy", "git fetch", "git checkout"], answer: "git clone" },
    { q: "Which command creates a new branch?", options: ["git branch", "git new", "git checkout -n", "git create"], answer: "git branch" },
    { q: "Which command switches to another branch?", options: ["git checkout", "git switch", "git change", "git move"], answer: "git checkout" },
    { q: "Which command checks repository status?", options: ["git status", "git info", "git log", "git check"], answer: "git status" }
  ],
  27: [
    { q: "Which Git command combines commits from another branch?", options: ["git merge", "git pull", "git fetch", "git join"], answer: "git merge" },
    { q: "Which command fetches remote updates but doesn’t merge?", options: ["git fetch", "git pull", "git sync", "git get"], answer: "git fetch" },
    { q: "Which command deletes a local branch?", options: ["git branch -d", "git delete", "git remove", "git drop"], answer: "git branch -d" },
    { q: "Which command is used to undo last commit (keep changes)?", options: ["git reset --soft HEAD~1", "git reset --hard", "git revert", "git undo"], answer: "git reset --soft HEAD~1" },
    { q: "Which command stashes uncommitted changes?", options: ["git stash", "git save", "git temp", "git hide"], answer: "git stash" },
    { q: "Which command applies stashed changes?", options: ["git stash apply", "git stash pop", "git stash load", "git restore"], answer: "git stash apply" },
    { q: "Which Git command changes commit message?", options: ["git commit --amend", "git change", "git rename", "git edit"], answer: "git commit --amend" },
    { q: "Which command shows file changes in a commit?", options: ["git show", "git log -p", "git diff", "git status"], answer: "git show" },
    { q: "Which command lists remote repositories?", options: ["git remote -v", "git list", "git repo", "git config"], answer: "git remote -v" },
    { q: "Which Git workflow uses feature branches?", options: ["Git Flow", "Trunk Based", "Centralized", "SVN Style"], answer: "Git Flow" }
  ],
  28: [
    { q: "CI/CD stands for?", options: ["Continuous Integration / Continuous Delivery", "Code Integration / Code Deployment", "Continuous Improvement / Continuous Debugging", "Central Integration / Central Deployment"], answer: "Continuous Integration / Continuous Delivery" },
    { q: "Which tool is NOT a CI/CD tool?", options: ["Jenkins", "GitHub Actions", "Ansible", "GitLab CI"], answer: "Ansible" },
    { q: "Which CI/CD tool is tightly integrated with GitHub?", options: ["GitHub Actions", "Jenkins", "CircleCI", "Travis CI"], answer: "GitHub Actions" },
    { q: "Which command triggers Jenkins pipeline?", options: ["git push", "jenkins build", "ci start", "pipeline run"], answer: "git push" },
    { q: "CI helps developers by?", options: ["Catching bugs early", "Replacing version control", "Managing databases", "Hosting applications"], answer: "Catching bugs early" },
    { q: "In CI/CD, artifacts are?", options: ["Build outputs", "Log files", "Test cases", "Configurations"], answer: "Build outputs" },
    { q: "Which CI/CD tool uses YAML pipelines?", options: ["GitLab CI", "Jenkins", "CircleCI", "Travis"], answer: "GitLab CI" },
    { q: "Which CI/CD tool is cloud-native by Google?", options: ["Cloud Build", "Tekton", "ArgoCD", "Spinnaker"], answer: "Cloud Build" },
    { q: "CD can mean Continuous Delivery or?", options: ["Continuous Deployment", "Continuous Debugging", "Continuous Design", "Continuous Database"], answer: "Continuous Deployment" },
    { q: "Which CI/CD tool uses .travis.yml?", options: ["Travis CI", "CircleCI", "GitHub Actions", "Azure Pipelines"], answer: "Travis CI" }
  ],
  29: [
    { q: "Which Git command re-applies commits from one branch to another?", options: ["git rebase", "git merge", "git cherry-pick", "git pull"], answer: "git rebase" },
    { q: "Which command compares working directory with last commit?", options: ["git diff", "git status", "git show", "git log"], answer: "git diff" },
    { q: "Which command pulls changes and merges automatically?", options: ["git pull", "git fetch", "git sync", "git merge"], answer: "git pull" },
    { q: "Which command lists tags?", options: ["git tag", "git branch", "git show", "git log"], answer: "git tag" },
    { q: "Which command creates a lightweight tag?", options: ["git tag v1.0", "git branch tag", "git release", "git checkpoint"], answer: "git tag v1.0" },
    { q: "Which command cherry-picks a commit?", options: ["git cherry-pick <commit>", "git pick", "git select", "git rebase commit"], answer: "git cherry-pick <commit>" },
    { q: "Which Git object stores snapshots of project?", options: ["Commit", "Blob", "Tree", "Tag"], answer: "Commit" },
    { q: "Which Git hosting platform also offers CI/CD?", options: ["GitLab", "Bitbucket", "GitHub", "All"], answer: "All" },
    { q: "Which Git command removes staged file?", options: ["git reset HEAD <file>", "git rm", "git delete", "git drop"], answer: "git reset HEAD <file>" },
    { q: "Which Git strategy avoids merge commits?", options: ["Rebase", "Merge", "Squash Merge", "Fast Forward"], answer: "Rebase" }
  ],
  30: [
    { q: "Which is NOT a CI/CD benefit?", options: ["Faster feedback", "Reduced bugs", "Manual deployments", "Automated testing"], answer: "Manual deployments" },
    { q: "Which CI/CD tool was created by Atlassian?", options: ["Bamboo", "Jenkins", "GitHub Actions", "GitLab CI"], answer: "Bamboo" },
    { q: "Which CI/CD pipeline stage runs unit tests?", options: ["Test stage", "Build stage", "Deploy stage", "Plan stage"], answer: "Test stage" },
    { q: "Which CI/CD stage deploys to staging environment?", options: ["Deploy stage", "Release stage", "Build stage", "Code stage"], answer: "Deploy stage" },
    { q: "Blue/Green deployment is used to?", options: ["Switch traffic between environments", "Backup data", "Run unit tests", "Monitor logs"], answer: "Switch traffic between environments" },
    { q: "Canary deployment releases code to?", options: ["Subset of users", "All users immediately", "Database only", "Testing only"], answer: "Subset of users" },
    { q: "Which CI/CD tool is native to Azure?", options: ["Azure Pipelines", "GitHub Actions", "Jenkins", "TeamCity"], answer: "Azure Pipelines" },
    { q: "CircleCI pipelines are defined in?", options: [".circleci/config.yml", "circle.json", "pipeline.yml", "build.yaml"], answer: ".circleci/config.yml" },
    { q: "Which CI/CD tool supports Helm & Kubernetes out of the box?", options: ["ArgoCD", "Travis", "Jenkins", "CircleCI"], answer: "ArgoCD" },
    { q: "Which is a CI/CD best practice?", options: ["Small, frequent commits", "Big commits once a month", "Manual deployments", "Skipping tests"], answer: "Small, frequent commits" }
  ],
  // Levels 31 → 35 will continue with advanced Git + CI/CD (50 more Qs)



  31: [
    { q: "Which Git command removes untracked files?", options: ["git clean -f", "git rm", "git reset", "git purge"], answer: "git clean -f" },
    { q: "Which command squashes commits interactively?", options: ["git rebase -i", "git squash", "git compress", "git merge --squash"], answer: "git rebase -i" },
    { q: "Which Git command signs commits?", options: ["git commit -S", "git sign", "git gpg", "git secure"], answer: "git commit -S" },
    { q: "Which command removes a file from repo but keeps it locally?", options: ["git rm --cached <file>", "git delete", "git drop", "git reset"], answer: "git rm --cached <file>" },
    { q: "Which Git object stores file contents?", options: ["Blob", "Tree", "Commit", "Tag"], answer: "Blob" },
    { q: "Which Git command changes remote URL?", options: ["git remote set-url", "git config remote", "git url change", "git remote update"], answer: "git remote set-url" },
    { q: "Which Git command shows reflog?", options: ["git reflog", "git log --all", "git history", "git reset"], answer: "git reflog" },
    { q: "Which Git strategy combines multiple commits into one?", options: ["Squash", "Merge", "Rebase", "Cherry-pick"], answer: "Squash" },
    { q: "Which Git hook runs before commit?", options: ["pre-commit", "pre-push", "commit-msg", "post-merge"], answer: "pre-commit" },
    { q: "Which Git hosting offers pipelines with YAML?", options: ["GitLab", "Bitbucket", "GitHub", "All"], answer: "All" }
  ],

  32: [
    { q: "Which CI/CD pipeline stage runs integration tests?", options: ["Test stage", "Build stage", "Deploy stage", "Release stage"], answer: "Test stage" },
    { q: "Which CI/CD tool supports declarative pipelines?", options: ["Jenkins", "GitHub Actions", "CircleCI", "GitLab"], answer: "Jenkins" },
    { q: "Infrastructure as Code in CI/CD means?", options: ["Automating infrastructure setup", "Manual deployments", "Code reviews only", "Git commits"], answer: "Automating infrastructure setup" },
    { q: "Which CI/CD tool is often paired with Kubernetes?", options: ["ArgoCD", "TeamCity", "Travis CI", "CircleCI"], answer: "ArgoCD" },
    { q: "What is artifact repository in CI/CD?", options: ["Stores build outputs", "Stores source code", "Stores config files", "Stores logs"], answer: "Stores build outputs" },
    { q: "Which CI/CD pipeline stage pushes artifacts?", options: ["Deploy stage", "Release stage", "Publish stage", "Test stage"], answer: "Publish stage" },
    { q: "Which CI/CD plugin allows Jenkins to integrate with GitHub?", options: ["GitHub plugin", "SCM plugin", "Git plugin", "Webhook plugin"], answer: "GitHub plugin" },
    { q: "What is pipeline as code?", options: ["Defining pipeline in config file", "Writing pipelines in shell scripts", "Manual pipelines", "Excel pipeline tracking"], answer: "Defining pipeline in config file" },
    { q: "Which CI/CD tool supports dynamic agents with Kubernetes?", options: ["Jenkins X", "GitHub Actions", "Travis", "CircleCI"], answer: "Jenkins X" },
    { q: "Which deployment ensures zero downtime?", options: ["Blue/Green", "Canary", "Rolling", "All"], answer: "All" }
  ],

  33: [
    { q: "Which Git command undoes staged changes?", options: ["git reset", "git checkout", "git undo", "git revert"], answer: "git reset" },
    { q: "Which Git command creates an annotated tag?", options: ["git tag -a v1.0", "git annotate v1.0", "git mark v1.0", "git release v1.0"], answer: "git tag -a v1.0" },
    { q: "Which Git command lists branches merged into current?", options: ["git branch --merged", "git log --merged", "git show-merged", "git branch --all"], answer: "git branch --merged" },
    { q: "Which Git config setting stores user email?", options: ["user.email", "user.mail", "email", "git.email"], answer: "user.email" },
    { q: "Which Git command creates a patch file?", options: ["git format-patch", "git diff", "git patch", "git export"], answer: "git format-patch" },
    { q: "Which Git command applies a patch?", options: ["git apply", "git patch", "git import", "git add"], answer: "git apply" },
    { q: "Which Git feature allows partial commits?", options: ["git add -p", "git commit -s", "git stage", "git select"], answer: "git add -p" },
    { q: "Which Git command edits history safely?", options: ["git rebase -i", "git reset --hard", "git edit-history", "git rewrite"], answer: "git rebase -i" },
    { q: "Which Git hosting provides Actions marketplace?", options: ["GitHub", "GitLab", "Bitbucket", "All"], answer: "GitHub" },
    { q: "Which Git strategy uses a single main branch?", options: ["Trunk Based", "Git Flow", "Feature Branching", "Centralized"], answer: "Trunk Based" }
  ],

  34: [
    { q: "Which CI/CD tool integrates with AWS natively?", options: ["CodePipeline", "Jenkins", "GitLab", "CircleCI"], answer: "CodePipeline" },
    { q: "Which CI/CD concept means multiple pipelines triggered together?", options: ["Pipeline chaining", "Pipeline fan-in", "Pipeline grouping", "Parallel builds"], answer: "Pipeline chaining" },
    { q: "Which CI/CD concept runs multiple builds at once?", options: ["Parallelism", "Serial execution", "Fan-out", "All"], answer: "Parallelism" },
    { q: "Which CI/CD stage verifies deployment in production?", options: ["Monitoring", "Testing", "Validation", "Integration"], answer: "Monitoring" },
    { q: "Which CI/CD approach deploys code immediately after tests pass?", options: ["Continuous Deployment", "Continuous Delivery", "Rolling", "Canary"], answer: "Continuous Deployment" },
    { q: "Which CI/CD tool offers matrix builds?", options: ["GitHub Actions", "Jenkins", "GitLab", "All"], answer: "GitHub Actions" },
    { q: "Which Jenkinsfile section defines stages?", options: ["pipeline { stages { } }", "jenkins { steps { } }", "ci { stages { } }", "build { run { } }"], answer: "pipeline { stages { } }" },
    { q: "Which CI/CD plugin handles Docker builds?", options: ["Docker plugin", "Kubernetes plugin", "Container plugin", "Build plugin"], answer: "Docker plugin" },
    { q: "Which CI/CD concept allows rollback easily?", options: ["Blue/Green", "Rolling", "Canary", "All"], answer: "Blue/Green" },
    { q: "Which CI/CD practice improves developer feedback loop?", options: ["Fast builds", "Long builds", "Manual QA", "Weekly deploys"], answer: "Fast builds" }
  ],

  35: [
    { q: "Which Git command verifies signed commits?", options: ["git verify-commit", "git check-sign", "git gpg-verify", "git commit --verify"], answer: "git verify-commit" },
    { q: "Which Git command bisects commits to find a bug?", options: ["git bisect", "git debug", "git log --bisect", "git blame"], answer: "git bisect" },
    { q: "Which Git command finds the commit that introduced a change?", options: ["git blame", "git show", "git history", "git track"], answer: "git blame" },
    { q: "Which Git subcommand creates worktrees?", options: ["git worktree", "git subtree", "git branch --tree", "git checkout --tree"], answer: "git worktree" },
    { q: "Which Git command restores deleted branch?", options: ["git reflog + git checkout -b", "git restore branch", "git revive", "git branch --recover"], answer: "git reflog + git checkout -b" },
    { q: "Which Git feature allows large files?", options: ["Git LFS", "Git Big", "Git Binary", "Git Storage"], answer: "Git LFS" },
    { q: "Which Git hosting provides Bitbucket Pipelines?", options: ["Bitbucket", "GitHub", "GitLab", "Azure"], answer: "Bitbucket" },
    { q: "Which CI/CD concept ensures repeatable builds?", options: ["Idempotency", "Mutability", "One-off scripts", "Untracked builds"], answer: "Idempotency" },
    { q: "Which CI/CD tool integrates with HashiCorp Vault?", options: ["Jenkins", "GitHub Actions", "GitLab", "All"], answer: "All" },
    { q: "Which CI/CD tool pioneered declarative pipelines?", options: ["Jenkins", "Travis", "GitHub Actions", "CircleCI"], answer: "Jenkins" }
  ],


  
  35: [
    { q: "Which Git command removes untracked files?", options: ["git clean -f", "git reset", "git rm", "git purge"], answer: "git clean -f" },
    { q: "What is the default port for Jenkins?", options: ["8080", "3000", "5000", "9090"], answer: "8080" },
    { q: "Which Docker command builds an image?", options: ["docker build", "docker create", "docker run", "docker compile"], answer: "docker build" },
    { q: "Terraform uses which language for configuration?", options: ["HCL", "YAML", "JSON", "XML"], answer: "HCL" },
    { q: "Which Ansible file defines tasks?", options: ["playbook.yml", "inventory.ini", "ansible.cfg", "roles.yml"], answer: "playbook.yml" },
    { q: "Which Git command finds bugs by binary search?", options: ["git bisect", "git blame", "git search", "git debug"], answer: "git bisect" },
    { q: "Docker images are stored in?", options: ["Registry", "Container", "Volume", "Node"], answer: "Registry" },
    { q: "Terraform state is stored in?", options: ["terraform.tfstate", "state.yml", "config.json", "infra.state"], answer: "terraform.tfstate" },
    { q: "Ansible communicates with nodes using?", options: ["SSH", "HTTP", "SNMP", "FTP"], answer: "SSH" },
    { q: "Which Jenkins plugin is used for pipelines?", options: ["Pipeline", "Maven", "GitHub", "Docker"], answer: "Pipeline" }
  ],
  36: [
    { q: "Which Git command finds who modified a line?", options: ["git blame", "git log", "git show", "git diff"], answer: "git blame" },
    { q: "Which Docker command lists running containers?", options: ["docker ps", "docker ls", "docker list", "docker show"], answer: "docker ps" },
    { q: "Terraform is categorized as?", options: ["IaC", "CI/CD", "CM", "Version Control"], answer: "IaC" },
    { q: "Ansible roles are stored in?", options: ["roles/", "tasks/", "modules/", "inventory/"], answer: "roles/" },
    { q: "Jenkins uses which file for pipelines?", options: ["Jenkinsfile", "pipeline.yml", "build.gradle", "ci.json"], answer: "Jenkinsfile" },
    { q: "Which Git command restores deleted file?", options: ["git checkout -- file", "git restore", "git reset", "git revert"], answer: "git checkout -- file" },
    { q: "Dockerfile instruction to set base image?", options: ["FROM", "BASE", "IMAGE", "RUN"], answer: "FROM" },
    { q: "Terraform command to see changes?", options: ["terraform plan", "terraform apply", "terraform show", "terraform diff"], answer: "terraform plan" },
    { q: "Ansible ad-hoc command runs with?", options: ["ansible", "ansible-playbook", "ansible-run", "ansible-task"], answer: "ansible" },
    { q: "Which Jenkins feature distributes builds?", options: ["Master/Slave", "Pipeline", "Plugins", "Stages"], answer: "Master/Slave" }
  ],
  37: [
    { q: "Which Git strategy combines commits into one?", options: ["Squash", "Rebase", "Merge", "Cherry-pick"], answer: "Squash" },
    { q: "Which Dockerfile instruction executes commands?", options: ["RUN", "CMD", "EXEC", "DO"], answer: "RUN" },
    { q: "Terraform init downloads?", options: ["Providers", "Modules", "Plugins", "All"], answer: "All" },
    { q: "Ansible facts gathering command?", options: ["ansible all -m setup", "ansible gather", "ansible facts", "ansible collect"], answer: "ansible all -m setup" },
    { q: "Jenkins uses what for plugins?", options: ["Update Center", "Marketplace", "Store", "Hub"], answer: "Update Center" },
    { q: "Which Git command creates annotated tag?", options: ["git tag -a", "git tag", "git annotate", "git label"], answer: "git tag -a" },
    { q: "Docker Compose file format?", options: ["YAML", "JSON", "INI", "XML"], answer: "YAML" },
    { q: "Terraform destroy command does?", options: ["Deletes infrastructure", "Creates infra", "Shows infra", "Validates code"], answer: "Deletes infrastructure" },
    { q: "Ansible inventory stores?", options: ["Host info", "Playbooks", "Tasks", "Variables"], answer: "Host info" },
    { q: "Which Jenkins pipeline type is declarative?", options: ["pipeline { }", "node { }", "script { }", "stage { }"], answer: "pipeline { }" }
  ],
  38: [
    { q: "Which Git command rebases interactively?", options: ["git rebase -i", "git merge -i", "git reset -i", "git amend"], answer: "git rebase -i" },
    { q: "Which Docker command removes container?", options: ["docker rm", "docker rmi", "docker delete", "docker stop"], answer: "docker rm" },
    { q: "Terraform backend stores?", options: ["State", "Modules", "Providers", "Variables"], answer: "State" },
    { q: "Ansible default inventory file?", options: ["/etc/ansible/hosts", "inventory.yml", "hosts.cfg", "ansible.ini"], answer: "/etc/ansible/hosts" },
    { q: "Which Jenkins stage compiles code?", options: ["Build", "Test", "Deploy", "Release"], answer: "Build" },
    { q: "Git reflog shows?", options: ["History of HEAD", "Branch names", "Stash", "Commits only"], answer: "History of HEAD" },
    { q: "Docker container logs command?", options: ["docker logs", "docker show", "docker view", "docker events"], answer: "docker logs" },
    { q: "Terraform variable file extension?", options: [".tfvars", ".vars", ".yaml", ".json"], answer: ".tfvars" },
    { q: "Ansible galaxy is for?", options: ["Sharing roles", "Inventory storage", "Module testing", "Log monitoring"], answer: "Sharing roles" },
    { q: "Jenkins can integrate with?", options: ["Git", "Docker", "Maven", "All"], answer: "All" }
  ],
  39: [
    { q: "Which Git command removes last commit permanently?", options: ["git reset --hard HEAD~1", "git revert", "git delete", "git undo"], answer: "git reset --hard HEAD~1" },
    { q: "Docker entrypoint defines?", options: ["Default executable", "Environment", "Ports", "Volumes"], answer: "Default executable" },
    { q: "Terraform workspaces used for?", options: ["Environments", "Modules", "Roles", "Providers"], answer: "Environments" },
    { q: "Ansible module to copy files?", options: ["copy", "file", "move", "fetch"], answer: "copy" },
    { q: "Jenkins scripted pipeline syntax?", options: ["node { }", "pipeline { }", "stage { }", "steps { }"], answer: "node { }" },
    { q: "Which Git command discards changes?", options: ["git checkout -- file", "git reset file", "git rm", "git clean"], answer: "git checkout -- file" },
    { q: "Docker volume is used for?", options: ["Persistent data", "Logs", "Network", "Ports"], answer: "Persistent data" },
    { q: "Terraform apply executes?", options: ["Plan", "Destroy", "Validate", "Init"], answer: "Plan" },
    { q: "Ansible vault encrypts?", options: ["Secrets", "Playbooks", "Hosts", "Tasks"], answer: "Secrets" },
    { q: "Jenkins jobs are stored as?", options: ["XML", "JSON", "YAML", "Config files"], answer: "XML" }
  ],
  // Levels 40–50 → more advanced DevOps mix (100 more Qs)
 
  // --- Already covered: 35 → 39 (50 Qs) ---

  40: [
    { q: "Which Git command undoes a commit but keeps changes?", options: ["git reset --soft", "git reset --hard", "git revert", "git clean"], answer: "git reset --soft" },
    { q: "Docker swarm is used for?", options: ["Orchestration", "Build", "Testing", "Logging"], answer: "Orchestration" },
    { q: "Terraform provider defines?", options: ["Infrastructure resource", "Playbook", "Inventory", "Pipeline"], answer: "Infrastructure resource" },
    { q: "Ansible ping test command?", options: ["ansible all -m ping", "ansible ping", "ansible test", "ansible check"], answer: "ansible all -m ping" },
    { q: "Jenkins can be installed using?", options: ["WAR file", "Docker", "Package manager", "All"], answer: "All" },
    { q: "Which Git command compares commits?", options: ["git diff", "git compare", "git log", "git reflog"], answer: "git diff" },
    { q: "Docker networking default driver?", options: ["bridge", "host", "overlay", "macvlan"], answer: "bridge" },
    { q: "Terraform import is used for?", options: ["Import existing infra", "Clone modules", "Download plugins", "Run apply"], answer: "Import existing infra" },
    { q: "Ansible uses which language?", options: ["YAML", "JSON", "XML", "INI"], answer: "YAML" },
    { q: "Jenkins shared libraries are written in?", options: ["Groovy", "Python", "Java", "Shell"], answer: "Groovy" }
  ],
  41: [
    { q: "Which Git command stashes changes?", options: ["git stash", "git save", "git backup", "git shelve"], answer: "git stash" },
    { q: "Dockerfile instruction for default command?", options: ["CMD", "RUN", "ENTRYPOINT", "EXEC"], answer: "CMD" },
    { q: "Terraform validate command checks?", options: ["Syntax errors", "Infrastructure", "State file", "Modules"], answer: "Syntax errors" },
    { q: "Ansible module to install packages on Linux?", options: ["apt/yum", "package", "install", "pkg"], answer: "apt/yum" },
    { q: "Jenkins job configuration stored in?", options: ["config.xml", "job.xml", "pipeline.yml", "jenkins.cfg"], answer: "config.xml" },
    { q: "Which Git command shows branches merged?", options: ["git branch --merged", "git log --merged", "git merge --show", "git show-branch"], answer: "git branch --merged" },
    { q: "Docker image layers are?", options: ["Immutable", "Mutable", "Temporary", "Volatile"], answer: "Immutable" },
    { q: "Terraform fmt does?", options: ["Formats code", "Executes plan", "Shows outputs", "Applies infra"], answer: "Formats code" },
    { q: "Ansible playbooks contain?", options: ["Tasks", "Commits", "Images", "Pipelines"], answer: "Tasks" },
    { q: "Jenkins Blue Ocean is used for?", options: ["Pipeline visualization", "Docker build", "Log analysis", "Terraform integration"], answer: "Pipeline visualization" }
  ],
  42: [
    { q: "Which Git command edits commit message?", options: ["git commit --amend", "git edit", "git change", "git modify"], answer: "git commit --amend" },
    { q: "Docker-compose default file?", options: ["docker-compose.yml", "compose.yaml", "docker.yml", "dockerfile"], answer: "docker-compose.yml" },
    { q: "Terraform output shows?", options: ["Values", "Modules", "Providers", "Logs"], answer: "Values" },
    { q: "Ansible async tasks run using?", options: ["poll", "async", "background", "run"], answer: "async" },
    { q: "Jenkins pipeline can be triggered by?", options: ["SCM changes", "Cron", "Manual", "All"], answer: "All" },
    { q: "Which Git command creates branch?", options: ["git branch", "git new", "git create", "git checkout"], answer: "git branch" },
    { q: "Docker exec runs?", options: ["Command inside container", "New container", "Stop container", "Logs"], answer: "Command inside container" },
    { q: "Terraform workspace list shows?", options: ["Environments", "Modules", "Providers", "Outputs"], answer: "Environments" },
    { q: "Ansible template files use?", options: ["Jinja2", "Mustache", "YAML", "XML"], answer: "Jinja2" },
    { q: "Jenkins master manages?", options: ["Job scheduling", "Build execution", "Slave nodes", "All"], answer: "All" }
  ],
  43: [
    { q: "Which Git command deletes a branch?", options: ["git branch -d", "git rm branch", "git delete", "git drop"], answer: "git branch -d" },
    { q: "Docker inspect gives?", options: ["Container details", "Image size", "Volume info", "Logs"], answer: "Container details" },
    { q: "Terraform providers are?", options: ["Plugins", "Modules", "Roles", "Variables"], answer: "Plugins" },
    { q: "Ansible default parallelism is?", options: ["5", "10", "20", "50"], answer: "5" },
    { q: "Jenkins artifact is?", options: ["Build output", "Log file", "Plugin", "Test case"], answer: "Build output" },
    { q: "Which Git command reverts a commit safely?", options: ["git revert", "git reset --hard", "git reset", "git clean"], answer: "git revert" },
    { q: "Docker stop command does?", options: ["Gracefully stops container", "Force kills container", "Deletes container", "Freezes container"], answer: "Gracefully stops container" },
    { q: "Terraform refresh updates?", options: ["State file", "Modules", "Providers", "Outputs"], answer: "State file" },
    { q: "Ansible facts are?", options: ["System info", "Logs", "Inventory", "Secrets"], answer: "System info" },
    { q: "Jenkins pipeline stages are?", options: ["Build/Test/Deploy", "Pull/Push", "Plan/Apply", "Start/Stop"], answer: "Build/Test/Deploy" }
  ],
  44: [
    { q: "Which Git command renames branch?", options: ["git branch -m", "git rename", "git move", "git change"], answer: "git branch -m" },
    { q: "Docker push uploads image to?", options: ["Registry", "Container", "Network", "Cluster"], answer: "Registry" },
    { q: "Terraform variable precedence highest?", options: ["CLI vars", "tfvars file", "Environment vars", "Default"], answer: "CLI vars" },
    { q: "Ansible handler runs when?", options: ["Notified", "Always", "Scheduled", "Condition"], answer: "Notified" },
    { q: "Jenkins can use credentials stored in?", options: ["Credentials plugin", "Git", "YAML", "INI"], answer: "Credentials plugin" },
    { q: "Which Git command shows commit graph?", options: ["git log --graph", "git tree", "git branch --graph", "git reflog --graph"], answer: "git log --graph" },
    { q: "Docker rmi removes?", options: ["Image", "Container", "Volume", "Logs"], answer: "Image" },
    { q: "Terraform init initializes?", options: ["Backend & providers", "State file only", "Modules only", "Outputs"], answer: "Backend & providers" },
    { q: "Ansible inventory groups hosts by?", options: ["Group names", "Labels", "IP", "Tags"], answer: "Group names" },
    { q: "Jenkins stages can be parallelized using?", options: ["parallel", "async", "multi", "concurrent"], answer: "parallel" }
  ],
  45: [
    { q: "Which Git command lists tags?", options: ["git tag", "git tags", "git show-tags", "git branch -t"], answer: "git tag" },
    { q: "Docker swarm init starts?", options: ["Manager node", "Worker node", "Container", "Service"], answer: "Manager node" },
    { q: "Terraform tfstate sensitive data stored?", options: ["Yes", "No", "Optional", "Encrypted"], answer: "Yes" },
    { q: "Ansible idempotency means?", options: ["Same result each run", "Random results", "Parallel runs", "Fail fast"], answer: "Same result each run" },
    { q: "Jenkins logs are stored in?", options: ["/var/log/jenkins", "/etc/jenkins", "/jenkins/logs", "C:/jenkins"], answer: "/var/log/jenkins" },
    { q: "Which Git command shows remote URLs?", options: ["git remote -v", "git show remote", "git list", "git config remote"], answer: "git remote -v" },
    { q: "Docker cp copies?", options: ["Files between host and container", "Images", "Volumes", "Logs"], answer: "Files between host and container" },
    { q: "Terraform destroy requires?", options: ["Approval", "Plan only", "Init only", "Config"], answer: "Approval" },
    { q: "Ansible vault decrypt command?", options: ["ansible-vault decrypt", "ansible decrypt", "vault open", "ansible-unlock"], answer: "ansible-vault decrypt" },
    { q: "Jenkinsfile is written in?", options: ["Groovy DSL", "YAML", "JSON", "Python"], answer: "Groovy DSL" }
  ],
  46: [
    { q: "Which Git command applies stashed changes?", options: ["git stash apply", "git pop", "git restore stash", "git reapply"], answer: "git stash apply" },
    { q: "Docker overlay network is used for?", options: ["Swarm clusters", "Local containers", "Volumes", "Logs"], answer: "Swarm clusters" },
    { q: "Terraform taint marks?", options: ["Resource for recreation", "Module as invalid", "Provider outdated", "Variable unused"], answer: "Resource for recreation" },
    { q: "Ansible module to manage services?", options: ["service", "systemd", "init", "control"], answer: "service" },
    { q: "Jenkins can use agents via?", options: ["SSH", "JNLP", "Docker", "All"], answer: "All" },
    { q: "Which Git command applies one commit?", options: ["git cherry-pick", "git pick", "git take", "git copy"], answer: "git cherry-pick" },
    { q: "Dockerfile COPY vs ADD difference?", options: ["ADD supports URLs", "Both same", "COPY faster", "ADD slower"], answer: "ADD supports URLs" },
    { q: "Terraform plan requires?", options: ["Configuration files", "Modules", "Providers only", "Inventory"], answer: "Configuration files" },
    { q: "Ansible async keyword used for?", options: ["Background tasks", "Variables", "Handlers", "Conditions"], answer: "Background tasks" },
    { q: "Jenkins environment variables defined in?", options: ["Pipeline", "Config.xml", "Inventory", "Dockerfile"], answer: "Pipeline" }
  ],
  47: [
    { q: "Which Git command stages part of file?", options: ["git add -p", "git stage", "git split", "git patch"], answer: "git add -p" },
    { q: "Docker secret used for?", options: ["Store sensitive data", "Network setup", "Volume storage", "Logs"], answer: "Store sensitive data" },
    { q: "Terraform module is?", options: ["Reusable config", "Provider", "Resource", "Variable"], answer: "Reusable config" },
    { q: "Ansible become keyword used for?", options: ["Privilege escalation", "Parallelism", "Vault", "Conditions"], answer: "Privilege escalation" },
    { q: "Jenkins archiveArtifacts stores?", options: ["Build outputs", "Logs", "Stages", "Plugins"], answer: "Build outputs" },
    { q: "Which Git command removes stash?", options: ["git stash drop", "git stash rm", "git pop", "git delete stash"], answer: "git stash drop" },
    { q: "Docker logs -f does?", options: ["Follow logs", "Delete logs", "Filter logs", "Save logs"], answer: "Follow logs" },
    { q: "Terraform depends_on ensures?", options: ["Resource order", "Variable scope", "Module reuse", "Provider config"], answer: "Resource order" },
    { q: "Ansible tags used for?", options: ["Run specific tasks", "Encrypt tasks", "Log tasks", "Debug tasks"], answer: "Run specific tasks" },
    { q: "Jenkins pipeline input step used for?", options: ["Manual approval", "Log input", "Variable input", "File input"], answer: "Manual approval" }
  ],
  48: [
    { q: "Which Git command squashes commits?", options: ["git rebase -i", "git squash", "git compress", "git merge"], answer: "git rebase -i" },
    { q: "Docker build context includes?", options: ["Current directory", "Only Dockerfile", "Image", "Volume"], answer: "Current directory" },
    { q: "Terraform locals are?", options: ["Named expressions", "Modules", "Providers", "Outputs"], answer: "Named expressions" },
    { q: "Ansible playbook dry-run option?", options: ["--check", "--dry", "--test", "--simulate"], answer: "--check" },
    { q: "Jenkins pipeline when condition used for?", options: ["Conditional stages", "Variables", "Secrets", "Parallel"], answer: "Conditional stages" },
    { q: "Which Git command shows conflicts?", options: ["git status", "git conflicts", "git diff", "git merge --show"], answer: "git status" },
    { q: "Docker prune removes?", options: ["Unused objects", "Running containers", "Logs", "Images only"], answer: "Unused objects" },
    { q: "Terraform count is used for?", options: ["Multiple resources", "Module reuse", "Variable defaults", "Output values"], answer: "Multiple resources" },
    { q: "Ansible register keyword used for?", options: ["Store output", "Encrypt variables", "Debug", "Conditions"], answer: "Store output" },
    { q: "Jenkins post section defines?", options: ["Actions after pipeline", "Build steps", "Variables", "Inputs"], answer: "Actions after pipeline" }
  ],
  49: [
    { q: "Which Git command moves commits?", options: ["git rebase", "git move", "git reset", "git merge"], answer: "git rebase" },
    { q: "Docker healthcheck defines?", options: ["Container health", "Logs", "Volumes", "Images"], answer: "Container health" },
    { q: "Terraform dynamic blocks used for?", options: ["Repeatable nested blocks", "Loops", "Variables", "Outputs"], answer: "Repeatable nested blocks" },
    { q: "Ansible with_items used for?", options: ["Loops", "Conditions", "Roles", "Handlers"], answer: "Loops" },
    { q: "Jenkins parallel stages run?", options: ["At same time", "Sequentially", "On slave only", "With logs"], answer: "At same time" },
    { q: "Which Git command discards staged changes?", options: ["git reset", "git clean", "git checkout", "git revert"], answer: "git reset" },
    { q: "Docker run -d does?", options: ["Detached mode", "Debug", "Delete", "Daemon stop"], answer: "Detached mode" },
    { q: "Terraform lifecycle block used for?", options: ["Create before destroy", "Count", "Variables", "Outputs"], answer: "Create before destroy" },
    { q: "Ansible delegate_to runs?", options: ["Task on another host", "Parallel tasks", "Background", "Handlers"], answer: "Task on another host" },
    { q: "Jenkins cron syntax used for?", options: ["Scheduled jobs", "Logs", "Secrets", "Variables"], answer: "Scheduled jobs" }
  ],
  50: [
    { q: "Which Git command clones repo shallow?", options: ["git clone --depth", "git clone shallow", "git shallow", "git depth"], answer: "git clone --depth" },
    { q: "Docker image tagging syntax?", options: ["name:tag", "tag@name", "repo/tag", "image-tag"], answer: "name:tag" },
    { q: "Terraform for_each used for?", options: ["Iterate over map/set", "Variables", "Outputs", "Modules"], answer: "Iterate over map/set" },
    { q: "Ansible conditional keyword?", options: ["when", "if", "case", "cond"], answer: "when" },
    { q: "Jenkins pipeline agent defines?", options: ["Where job runs", "Stages", "Variables", "Post actions"], answer: "Where job runs" },
    { q: "Which Git command pulls with rebase?", options: ["git pull --rebase", "git rebase pull", "git merge pull", "git fetch --rebase"], answer: "git pull --rebase" },
    { q: "Docker save exports?", options: ["Image", "Container", "Logs", "Volumes"], answer: "Image" },
    { q: "Terraform data sources used for?", options: ["Fetch external data", "Outputs", "Variables", "Modules"], answer: "Fetch external data" },
]

};


  let selectedLevel, score = 0;

  function startQuizunic() {
    // const username = document.getElementById("username").value.trim();
    // const password = document.getElementById("password").value.trim();
    selectedLevel = document.getElementById("level").value;

    // if (!username || !password) {
    //   alert("Please enter username and password");
    //   return;
    // }

    // document.getElementById("userForm").classList.add("hidden");
    document.getElementById("quizSection").classList.remove("hidden");

    document.getElementById("quizTitle").textContent = "Linux Quiz - Level " + selectedLevel;

    loadQuiz(selectedLevel);
  }

  function loadQuiz(level) {
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = "";
    linuxQuestions[level].forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("questionBlock");
      div.innerHTML = `
        <div class="question"><span> ${index+1}</span>.<span>  ${item.q}</span></div>
        <div class="options">
          ${item.options.map(opt => `
            <label class="sai"><input type="radio" class="input" name="q${index}" value="${opt}"> <span> ${opt}</span></label>
          `).join("")}
        </div>
      `;
      quizContainer.appendChild(div);
    });
  }

  function submitQuiz() {
    score = 0;
    const questions = linuxQuestions[selectedLevel];
    questions.forEach((q, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected && selected.value === q.answer) {
        score++;
      }
    });

    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) {
      alert("🎉 Congratulations! You Qualified. Score: " + percentage + "%");
      nextlevel();
    } else {
      alert("❌ Sorry! You did not qualify. Score: " + percentage + "%");
     }
    // location.reload();
  }
