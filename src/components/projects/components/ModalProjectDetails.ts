import type { Project } from "../../../models/Project";

export function showModalProject (project: Project) {

    const modal = document.createElement('div');
    modal.classList.add('z-10', 'modal', 'flex', 'flex-col', 'items-center', 'justify-center', 'h-full', 'p-5', 'w-full', 'backdrop-blur-sm', 'fixed', 'top-0', 'left-0', 'bottom-0', 'right-0');
    modal.innerHTML = `
        <div class="h-full w-full absolute top-0 left-0 bottom-0 right-0 "></div>
        <div class="text-white rounded-xl w-full max-w-lg overflow-hidden bg-primary-dark border border-gray-700 relative">
            <section class="h-64 overflow-hidden">
                <img class="object-cover object-right-bottom" src='${project.imagePath}' alt="">
                <div class="bg-gradient-to-b from-gray-800/75 absolute top-0 right-0 p-2 w-full flex items-end">
                    <button class="ml-auto close-modal">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="28" fill="currentColor"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path><path d="M11.414 10l2.829 2.828a1 1 0 0 1-1.415 1.415L10 11.414l-2.828 2.829a1 1 0 1 1-1.415-1.415L8.586 10 5.757 7.172a1 1 0 0 1 1.415-1.415L10 8.586l2.828-2.829a1 1 0 0 1 1.415 1.415L11.414 10z"></path></svg>
                    </button>
                </div>
            </section>
            <section class="">
                <div class="flex items-center justify-between mb-4 px-7 pt-5 gap-4">
                    <div class="flex gap-3 items-center">
                        <h4 class="text-white font-bold text-2xl lg:text-xl text-nowrap overflow-hidden text-ellipsis max-w-56 lg:max-w-60">${project.title}</h4>
                        <a href="" class="text-white" target="_blank">
                            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H13C13.5304 17 14.0391 16.7893 14.4142 16.4142C14.7893 16.0391 15 15.5304 15 15V9M8 10L17 1M17 1H12M17 1V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                    <p class="text-xs text-gray-400 text-nowrap">${project.business}</p>
                </div>
                <div class="px-7 py-2 mb-5 max-h-72 overflow-y-auto">
                    <p>${project.description}</p>
                </div>

                <div class="flex flex-wrap gap-2 px-7 mb-5">
                    ${project.technologies.map((technology) => `<div class="flex justify-center items-center px-3 py-1 text-sm lg:text-xs text-body bg-gray-50/10 font-medium rounded-full border border-gray-600">${technology}</div>`).join('')}
                </div>
            </section>
        </div>
    `

    modal.querySelector('.close-modal')?.addEventListener('click', ()=> modal.remove());
    modal.firstElementChild?.addEventListener('click', ()=> modal.remove());

    document.body.appendChild(modal);
}
