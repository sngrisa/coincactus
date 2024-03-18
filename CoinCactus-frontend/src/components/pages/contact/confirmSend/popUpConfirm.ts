import Swal from "sweetalert2";

export let getNotificationSucess = (): void => {
    Swal.fire({
        title: "Email enviado con éxito",
        icon: "success",
        position: "center",
        showConfirmButton: false,
        timer: 2000,
        background: "black"
    })
}

export let getNotificationError = (): void => {
    Swal.fire({
        title: "No se pudo enviar el email, intentelo más tarde",
        icon: "error",
        position: "center",
        showConfirmButton: false,
        timer: 2500,
        background: "black"
    })
}

