function fVerificaDados (t_nome, t_cpf){
    if (t_cpf == '11111111111' ||
        t_cpf == '22222222222'  ||
        t_cpf == '33333333333'  ||
        t_cpf == '44444444444'  || 
        t_cpf == '55555555555'  ||
        t_cpf == '66666666666'  ||
        t_cpf == '77777777777'  ||
        t_cpf == '88888888888'  ||
        t_cpf == '99999999999'  ||
    );
    {
        alert('cpf invalido.');  
    } else {
        alert(`bem vindo(a), ${t_cpf}`);
    }
    alert(`bem vindo, ${t_nome}`);
}