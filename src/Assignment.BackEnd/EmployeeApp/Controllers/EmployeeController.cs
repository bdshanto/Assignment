using System.Threading.Tasks;
using EmployeeApp.Context;
using EmployeeApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApp.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public EmployeeController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var dataList = await _dbContext.Employees.ToListAsync();
            return Ok(dataList);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Employee data)
        {
            var model = await _dbContext.Employees.AddAsync(data);
            var isAdded = await _dbContext.SaveChangesAsync() > 0;
            if (isAdded)
            {
                return Ok(model);
            }

            return BadRequest();
        }

        [HttpPut]
        public async Task<IActionResult> Put(long id, Employee data)
        {
            if (id > 0 || !ModelState.IsValid) return BadRequest(ModelState);

            var model = _dbContext.Entry(data).State = EntityState.Modified;
            var isUpdated = await _dbContext.SaveChangesAsync() > 0;
            if (isUpdated)
            {
                return Ok(model);
            }

            return BadRequest();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(Employee data)
        {

            var model = _dbContext.Remove(data);
            var isUpdated = await _dbContext.SaveChangesAsync() > 0;
            if (isUpdated)
            {
                return Ok(model);
            }

            return BadRequest();


        }
    }
}