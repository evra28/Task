//Variables
let i;
let j;
let k;
let l;
let min='0';
let len=0;
let cond=true;

//Random Function
let a = document.getElementsByClassName('No.');
for(i=0;i<9;i++)
{
  a[i].textContent = Math.floor(Math.random() * 100) + 1;
}

//Function to assign into array
let b=new Array(9);
for(i=0;i<9;i++)
 b[i]=a[i].textContent;

//arrange array b
for(i=0;i<8;i++)
{
  min=i;
  for(j=i+1;j<9;j++)
  {
    if(b[j] < b[min])
    {
      min=j
    }
  }
  k=b[min];
  b[min]=b[i];
  b[i]=k;
}

//Function to check if selection is right or not
 var cells=document.querySelectorAll('.child');
  for(i=0;i<9;i++)
  {
    cells[i].addEventListener('click',function(temp)
    {
       if(temp.target.textContent ==b[len])
       {
         temp.target.textContent="";
         len++;
         }
       }
    });
  }
