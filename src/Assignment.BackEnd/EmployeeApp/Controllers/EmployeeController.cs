using System.Net.Mime;
using System.Threading.Tasks;
using EmployeeApp.Context;
using EmployeeApp.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApp.Controllers
{
    [Route("api/[controller]")]
   // [EnableCors("cors")]
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
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(long id)
        {
            var dataList = await _dbContext.Employees.FindAsync(id);
            return Ok(dataList);
        }

        [HttpPost]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Employee))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Post([FromBody]Employee employee)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState.Root.ValidationState);
            {
                
            }
            var model = await _dbContext.Employees.AddAsync(employee);
            var isAdded = await _dbContext.SaveChangesAsync() > 0;
            if (isAdded)
            {
                return Ok(isAdded);
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