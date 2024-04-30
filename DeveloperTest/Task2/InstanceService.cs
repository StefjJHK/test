using Task1;

namespace Task2
{
    public class InstanceService
    {
        //Антипаттерн "Ограниченая конструкция"
        public IEnumerable<TEntity> GetInstances<TEntity>() where TEntity : class
        {
            var entityType = typeof(TEntity);
            var types = typeof(Vehicle).Assembly
                .GetTypes()
                .Where(x => x == entityType || entityType.IsAssignableFrom(x));
            
            foreach(var type in types)
            {
                yield return Activator.CreateInstance(type) as TEntity;
            }
        }
    }
}
