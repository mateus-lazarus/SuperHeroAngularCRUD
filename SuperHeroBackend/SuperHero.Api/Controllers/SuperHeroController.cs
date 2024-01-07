using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuperHero.Api.Data;

namespace SuperHero.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SuperHeroController : ControllerBase
    {
        private readonly DataContext _context;

        public SuperHeroController(DataContext context, ILogger<SuperHeroController> logger)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> GetSuperHeroes()
        {
            return Ok(await _context.SuperHeroes.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<SuperHero>>> CreateSuperHeroes(
            [FromBody] SuperHero hero    
        )
        {
            _context.SuperHeroes.Add(hero);

            await _context.SaveChangesAsync();

            return Ok(hero);
        }

        [HttpPut]
        public async Task<ActionResult<List<SuperHero>>> UpdateSuperHeroes(
            [FromBody] SuperHero hero
        )
        {
            var heroOnDatabase = await _context.SuperHeroes.FirstAsync(x => x.Id == hero.Id);

            if (heroOnDatabase is null)
            {
                return NotFound();
            }

            heroOnDatabase.Name = hero.Name;
            heroOnDatabase.FirstName = hero.FirstName;
            heroOnDatabase.LastName = hero.LastName;
            heroOnDatabase.Place = hero.Place;

            await _context.SaveChangesAsync();

            return Ok(hero);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<SuperHero>>> DeleteSuperHeroes(int id)
        {
            var heroOnDatabase = await _context.SuperHeroes.FindAsync(id);

            if (heroOnDatabase is null)
            {
                return NotFound();
            }

            _context.SuperHeroes.Remove(heroOnDatabase);

            await _context.SaveChangesAsync();

            return Ok(await _context.SuperHeroes.ToListAsync());
        }
    }
}
