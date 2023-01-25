const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

function highlightCup(index)
{
    if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full'))  index--; 

    smallCups.forEach((cup, index2)=>{
        if(index2 <= index)
        {
            cup.classList.add('full');
        }
        else
        {
            cup.classList.remove('full');
        }
    });

    updateBigCup();
};

smallCups.forEach((cup, index)=>{
    cup.addEventListener('click', ()=>highlightCup(index));
});


function updateBigCup()
{
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalSmallCups = smallCups.length;

    if(fullCups == 0)
    {
        percentage.style.visibility = 'hidden';
        percentage.style.height     = 0; 
    }
    else
    {
        percentage.style.visibility = 'visible';
        percentage.style.height     = `${fullCups / totalSmallCups * 330}px`;
        percentage.innerHTML        = `${fullCups / totalSmallCups * 100} %`
    }

    if(fullCups == totalSmallCups)
    {
        remained.style.visibility = 'hidden';
        remained.style.height     = 0; 
    }
    else
    {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (500 * fullCups / 1000)} L`;

    }
}
