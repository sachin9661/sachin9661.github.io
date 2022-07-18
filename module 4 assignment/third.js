var names=new Array();
names[0]="raju";
names[1]="jana";
names[2]="kamal";
names[3]="hasan";
names[4]="john";
names[5]="january";
names[6]="shyam";
names[7]="Jackson";
names[8]="ramesh";
names[9]="virat";
names[10]="Jupitar";
names[11]="uttam";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}