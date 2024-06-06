// JavaScript changes
document.addEventListener('DOMContentLoaded', function () {
    var dashboardLink = document.getElementById('dashboard-link');
    var customersLink = document.getElementById('customers-link');
    var newCustomersCard = document.getElementById('new-customers-card');
    var dashboardCards = document.getElementById('dashboard-cards');
    var dashboardContent = document.getElementById('dashboard-content');
    var createProjectCard = document.getElementById('create-project-card');
    var newProjectForm = document.getElementById('new-project-form');
    var createProjectForm = document.getElementById('create-project');
    var yourProjectsTable = document.getElementById('your-projects-table').getElementsByTagName('tbody')[0];
    var overlay = document.getElementById('overlay');
    var closeFormBtn = document.getElementById('close-form');
    if (dashboardLink && customersLink && newCustomersCard && dashboardCards && dashboardContent) {
        customersLink.addEventListener('click', function (event) {
            event.preventDefault();
            newCustomersCard.style.display = 'block';
            dashboardContent.classList.add('hidden');
        });
        dashboardLink.addEventListener('click', function (event) {
            event.preventDefault();
            newCustomersCard.style.display = 'none';
            dashboardContent.classList.remove('hidden');
        });
    }
    if (createProjectCard && newProjectForm && createProjectForm && yourProjectsTable && overlay && closeFormBtn) {
        createProjectCard.addEventListener('click', function () {
            newProjectForm.classList.add('show');
            overlay.classList.add('show');
        });
        closeFormBtn.addEventListener('click', function () {
            newProjectForm.classList.remove('show');
            overlay.classList.remove('show');
        });
        overlay.addEventListener('click', function () {
            newProjectForm.classList.remove('show');
            overlay.classList.remove('show');
        });
        createProjectForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var projectName = document.getElementById('project-name').value;
            var projectDate = document.getElementById('project-date').value;
            var projectTeam = document.getElementById('project-team').value;
            var projectStatus = document.getElementById('project-status').value;
            var newRow = yourProjectsTable.insertRow();
            newRow.innerHTML = "\n                <td>".concat(projectName, "</td>\n                <td>").concat(projectDate, "</td>\n                <td>").concat(projectTeam, "</td>\n                <td>").concat(projectStatus, "</td>\n                <td>\n                    <span class=\"fas fa-edit\" style=\"cursor: pointer; color: #35a6f7;\"></span>\n                    <span class=\"fas fa-trash\" style=\"cursor: pointer; margin-left: 0.5rem; color:red;\"></span>\n                </td>\n            ");
            createProjectForm.reset();
            newProjectForm.classList.remove('show');
            overlay.classList.remove('show');
        });
    }
});
